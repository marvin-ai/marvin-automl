#!/usr/bin/env python
# coding=utf-8

try:
    import mock

except ImportError:
    import unittest.mock as mock

from marvin_automl_engine.training import MetricsEvaluator


class TestMetricsEvaluator:
    @mock.patch("marvin_automl_engine.training.metrics_evaluator.mtr")
    def test_classification_metrics(self, mock_metrics):
        mock_metrics.accuracy_score.return_value = 1
        mock_metrics.f1_score.return_value = 1
        mock_metrics.precision_score.return_value = 1
        mock_metrics.recall_score.return_value = 1

        ac = MetricsEvaluator()
        model = mock.MagicMock()
        model.predict.return_value = 5
        ac.marvin_model = {"model": model}
        ac.marvin_dataset = {
        	"X_train": 1,
            "X_test": 2,
            "y_train": 3,
            "y_test": 4,
        }
        ac.execute(params={'problem_type': 'classification'})

        mock_metrics.accuracy_score.assert_called_once_with(4, 5)
        mock_metrics.f1_score.assert_called_once_with(4, 5, average='weighted')
        mock_metrics.precision_score.assert_called_once_with(4, 5, average='weighted')
        mock_metrics.recall_score.assert_called_once_with(4, 5, average='weighted')
        assert ac.marvin_metrics == {'accuracy': 1, 'f1_weighted': 1, 'precision': 1, 'recall': 1}


    @mock.patch("marvin_automl_engine.training.metrics_evaluator.mtr")
    def test_regression_metrics(self, mock_metrics):
        mock_metrics.explained_variance_score.return_value = 1
        mock_metrics.mean_absolute_error.return_value = 1
        mock_metrics.mean_squared_log_error.return_value = 1
        mock_metrics.r2_score.return_value = 1

        ac = MetricsEvaluator()
        model = mock.MagicMock()
        model.predict.return_value = 5
        ac.marvin_model = {"model": model}
        ac.marvin_dataset = {
            "X_train": 1,
            "X_test": 2,
            "y_train": 3,
            "y_test": 4,
        }
        ac.execute(params={'problem_type': 'regression'})

        mock_metrics.explained_variance_score.assert_called_once_with(4, 5)
        mock_metrics.mean_absolute_error.assert_called_once_with(4, 5)
        mock_metrics.mean_squared_log_error.assert_called_once_with(4, 5)
        mock_metrics.r2_score.assert_called_once_with(4, 5)
        assert ac.marvin_metrics == {'explained_variance_score': 1, 'mean_absolute_error': 1, 'mean_squared_log_error': 1, 'r2_score': 1}