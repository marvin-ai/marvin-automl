#!/usr/bin/env python
# coding=utf-8

try:
    import mock

except ImportError:
    import unittest.mock as mock

from marvin_automl_engine.prediction import PredictionPreparator

import numpy as np
import pandas as pd

class TestPredictionPreparator:
    def test_execute_with_continuous_input(self):
        ac = PredictionPreparator()
        df = pd.DataFrame([
            [1,2,3],
            [5,4,np.nan],
            [3,2,1],

        ])
        clean = ac.execute(input_message=df, params={})
        assert clean.equals(pd.DataFrame([
            [1,2,3.],
            [5,4,2.],
            [3,2,1.]
        ]))

    def test_execute_with_categorical_input(self):
        ac = PredictionPreparator()
        df = pd.DataFrame([
            ['A', 'B'],
            ['B', np.nan], 
            ['C', 'C'],
            ['D', 'C'],
        ])
        clean = ac.execute(input_message=df, params={})
        assert clean.equals(pd.DataFrame([
            [0, 0],
            [1, 1], 
            [2, 1],
            [3, 1],
        ]))