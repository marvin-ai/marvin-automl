#!/usr/bin/env python
# coding=utf-8

try:
    import mock
except ImportError:
    import unittest.mock as mock

from marvin_automl_engine.data_handler import TrainingPreparator


class TestTrainingPreparator:

    @mock.patch("marvin_automl_engine.data_handler.training_preparator.train_test_split")
    def test_execute(self, mock_split):
        mock_split.return_value = (42, 42, 42, 42)

        ac = TrainingPreparator()

        ac.marvin_initial_dataset = mock.MagicMock()
        params = {"target": "test"}
        ac.execute(params=params)

        assert ac.marvin_dataset == {
            "X_train": 42,
            "X_test": 42,
            "y_train": 42,
            "y_test": 42,
        }
        ac.marvin_initial_dataset.drop.assert_called_once_with("test", axis=1)
