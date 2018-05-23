#!/usr/bin/env python
# coding=utf-8

"""Trainer engine action.

Use this module to add the project main code.
"""

from .._compatibility import six
from .._logging import get_logger

from marvin_python_toolbox.engine_base import EngineBaseTraining

import pandas as pd
from tpot import TPOTClassifier, TPOTRegressor


__all__ = ["Trainer"]


logger = get_logger("trainer")


class Trainer(EngineBaseTraining):

    def __init__(self, **kwargs):
        super(Trainer, self).__init__(**kwargs)

    def execute(self, params, **kwargs):
        problem_type = params.get("problem_type")
        TPOTClass = TPOTClassifier if problem_type == "classification" else TPOTRegressor
        model = TPOTClass(
            generations=params.get("generations"),
            population_size=params.get("population_size"),
            verbosity=2,
            config_dict=params.get("config")
        )

        X_train = self.marvin_dataset["X_train"]
        y_train = self.marvin_dataset["y_train"]

        model.fit(X_train, y_train)

        self.marvin_model = {
            "model": model.fitted_pipeline_
        }
