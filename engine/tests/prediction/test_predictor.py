#!/usr/bin/env python
# coding=utf-8

try:
    import mock
except ImportError:
    import unittest.mock as mock

import numpy as np
from marvin_automl_engine.prediction import Predictor


class TestPredictor:
    def test_execute(self):
        ac = Predictor()
        model = mock.MagicMock()
        model.predict.return_value = ["test"]
        ac.marvin_model = {"model": model}
        pred = ac.execute(input_message=[13, 42], params=None)
        assert model.predict.call_args[0][0].tolist() == [13., 42.]
        assert pred == "test"