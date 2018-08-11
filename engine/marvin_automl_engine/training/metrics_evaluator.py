#!/usr/bin/env python
# coding=utf-8

"""MetricsEvaluator engine action.

Use this module to add the project main code.
"""

from .._compatibility import six
from .._logging import get_logger

from marvin_python_toolbox.engine_base import EngineBaseTraining

from sklearn import metrics as mtr

__all__ = ['MetricsEvaluator']


logger = get_logger('metrics_evaluator')


class MetricsEvaluator(EngineBaseTraining):

    def __init__(self, **kwargs):
        super(MetricsEvaluator, self).__init__(**kwargs)

    def execute(self, params, **kwargs):
        X_test = self.marvin_dataset["X_test"]
        y_test = self.marvin_dataset["y_test"]
        y_pred = self.marvin_model["model"].predict(X_test)

        metrics = {}
        if params.get("problem_type") == "classification":
            metrics["accuracy"] = mtr.accuracy_score(y_test, y_pred)
            metrics["f1_weighted"] = mtr.f1_score(y_test, y_pred, average="weighted")
            metrics["precision"] = mtr.precision_score(y_test, y_pred, average="weighted")
            metrics["recall"] = mtr.recall_score(y_test, y_pred, average="weighted")

        elif params.get("problem_type") == "regression":
            metrics["explained_variance_score"] = mtr.explained_variance_score(y_test, y_pred)
            metrics["mean_absolute_error"] = mtr.mean_absolute_error(y_test, y_pred)
            metrics["mean_squared_log_error"] = mtr.mean_squared_log_error(y_test, y_pred)
            metrics["r2_score"] = mtr.r2_score(y_test, y_pred)

        self.marvin_metrics = metrics
