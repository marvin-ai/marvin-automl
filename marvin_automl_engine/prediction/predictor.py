#!/usr/bin/env python
# coding=utf-8

"""Predictor engine action.

Use this module to add the project main code.
"""

from .._compatibility import six
from .._logging import get_logger

from marvin_python_toolbox.engine_base import EngineBasePrediction

__all__ = ['Predictor']


logger = get_logger('predictor')


class Predictor(EngineBasePrediction):

    def __init__(self, **kwargs):
        super(Predictor, self).__init__(**kwargs)

    def execute(self, input_message, params, **kwargs):
        import pandas as pd
        logger.warning("INPUT MSG: %s" % input_message)
        logger.warning("PARAMS: %s" % params)
        df = pd.DataFrame(data=input_message)
        for x in df.select_dtypes(include=["object"]).columns:
            df[x] = df[x].astype("category")
        df = self.marvin_model["transformer"].transform(df)
        final_prediction = self.marvin_model["model"].predict(df)[0]
        logger.warning("PREDICTION: %s" % final_prediction)
        return int(final_prediction)