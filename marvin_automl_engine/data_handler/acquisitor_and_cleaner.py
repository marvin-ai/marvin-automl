#!/usr/bin/env python
# coding=utf-8

"""AcquisitorAndCleaner engine action.

Use this module to add the project main code.
"""

from .._compatibility import six
from .._logging import get_logger

from marvin_python_toolbox.common.data import MarvinData
from marvin_python_toolbox.engine_base import EngineBaseDataHandler

import pandas as pd


__all__ = ['AcquisitorAndCleaner']


logger = get_logger('acquisitor_and_cleaner')


class AcquisitorAndCleaner(EngineBaseDataHandler):

    def __init__(self, **kwargs):
        super(AcquisitorAndCleaner, self).__init__(**kwargs)

    def execute(self, params, **kwargs):
        df = pd.read_csv(
            MarvinData.download_file(params.get("url")),
            sep=params.get("separator"),
            encoding=params.get("encoding"),
            engine="python"
        )
        self.marvin_initial_dataset = df
