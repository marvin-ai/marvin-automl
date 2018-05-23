#!/usr/bin/env python
# coding=utf-8

try:
    import mock
except ImportError:
    import unittest.mock as mock

from marvin_automl_engine.training import Trainer


class TestTrainer:

    @mock.patch("marvin_automl_engine.training.trainer.TPOTClassifier.__new__", autospec=True)
    def test_execute_on_classification(self, mock_new):
        model = mock.MagicMock()
        model.fitted_pipeline_ = mock.MagicMock()
        mock_new.return_value = model

        ac = Trainer()
        params = {
            "problem_type": "classification",
            "generations": 3,
            "population_size": 10,
            "config": "test",
        }
        ac.marvin_dataset = {
            "X_train": 1,
            "X_test": 2,
            "y_train": 3,
            "y_test": 4,
        }
        ac.execute(params=params)
        
        model.fit.assert_called_once_with(1, 3)

    @mock.patch("marvin_automl_engine.training.trainer.TPOTRegressor.__new__", autospec=True)
    def test_execute_on_regression(self, mock_new):
        model = mock.MagicMock()
        model.fitted_pipeline_ = mock.MagicMock()
        mock_new.return_value = model

        ac = Trainer()
        params = {
            "problem_type": "regression",
            "generations": 3,
            "population_size": 10,
            "config": "test",
        }
        ac.marvin_dataset = {
            "X_train": 1,
            "X_test": 2,
            "y_train": 3,
            "y_test": 4,
        }
        ac.execute(params=params)
        
        model.fit.assert_called_once_with(1, 3)
        
