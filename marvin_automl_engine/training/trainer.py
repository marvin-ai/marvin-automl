#!/usr/bin/env python
# coding=utf-8

"""Trainer engine action.

Use this module to add the project main code.
"""

from .._compatibility import six
from .._logging import get_logger

from marvin_python_toolbox.engine_base import EngineBaseTraining

import pandas as pd

__all__ = ["Trainer"]


logger = get_logger("trainer")


class Trainer(EngineBaseTraining):

    def __init__(self, **kwargs):
        super(Trainer, self).__init__(**kwargs)

    def execute(self, params, **kwargs):
        import numpy as np
        from tpot import TPOTClassifier
        from sklearn.pipeline import Pipeline, FeatureUnion
        from sklearn.preprocessing import OneHotEncoder, StandardScaler, Imputer

        transformer = Pipeline([
            ("features", FeatureUnion(n_jobs=1, transformer_list=[
                
                ("numericals", Pipeline([
                    ("selector", TypeSelector(np.number)),
                    ("imputer", Imputer(strategy="mean")),
                    ("scaler", StandardScaler()),
                ])),
                
                ("categoricals", Pipeline([
                    ("selector", TypeSelector("category")),
                    ("labeler", StringIndexer()),
                    ("imputer", Imputer(strategy="most_frequent")),
                    ("encoder", OneHotEncoder(handle_unknown="ignore")),
                ]))
            ])), 
        ])

        tpot = TPOTClassifier(
            generations=params.get("generations"),
            population_size=params.get("population_size"),
            verbosity=2,
            config_dict=params.get("config")
        )

        X_train = self.marvin_dataset["X_train"]
        y_train = self.marvin_dataset["y_train"]

        X_train = transformer.fit_transform(X_train, y_train)
        tpot.fit(X_train, y_train)

        self.marvin_model = {
            "transformer": transformer,
            "model": tpot.fitted_pipeline_
        }


from sklearn.base import BaseEstimator, TransformerMixin
class TypeSelector(BaseEstimator, TransformerMixin):
    def __init__(self, dtype):
        self.dtype = dtype
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        assert isinstance(X, pd.DataFrame)
        return X.select_dtypes(include=[self.dtype])


class StringIndexer(BaseEstimator, TransformerMixin):
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        assert isinstance(X, pd.DataFrame)
        return X.apply(lambda s: s.cat.codes.replace(
            {-1: len(s.cat.categories)}
        ))