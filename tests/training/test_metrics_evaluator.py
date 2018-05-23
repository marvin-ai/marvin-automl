#!/usr/bin/env python
# coding=utf-8

try:
    import mock

except ImportError:
    import unittest.mock as mock

from marvin_automl_engine.training import MetricsEvaluator


class TestMetricsEvaluator:
    def test_execute(self):
        ac = MetricsEvaluator()
        model = mock.MagicMock()
        model.score.return_value = "test"
        ac.marvin_model = {"model": model}
        ac.marvin_dataset = {
        	"X_train": 1,
            "X_test": 2,
            "y_train": 3,
            "y_test": 4,
        }
        ac.execute(params=None)
        model.score.assert_called_once_with(2, 4)
        assert ac.marvin_metrics == "test"