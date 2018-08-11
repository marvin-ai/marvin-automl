#!/usr/bin/env python
# coding=utf-8

try:
    import mock
except ImportError:
    import unittest.mock as mock

from marvin_python_toolbox.common.data import MarvinData
from marvin_automl_engine.data_handler import AcquisitorAndCleaner

 
class TestAcquisitorAndCleaner:

    @mock.patch.object(MarvinData, "download_file")
    @mock.patch("marvin_automl_engine.data_handler.acquisitor_and_cleaner.pd")
    def test_execute_acquisitor_create_dataframe(self, mock_pd, mock_download):
        df = mock.MagicMock()
        mock_pd.read_csv.return_value = df
        mock_download.return_value = "/path/to/file"

        ac = AcquisitorAndCleaner()
        params = {
            "separator": ";",
            "url": "http://www.test.com/dataset.csv",
            "encoding": "utf-8"
        }
        ac.execute(params=params)
        
        assert ac.marvin_initial_dataset == df
        mock_pd.read_csv.assert_called_once_with(
            "/path/to/file",
            sep=";",
            encoding="utf-8",
            engine="python"
        )
        mock_download.assert_called_once_with("http://www.test.com/dataset.csv")
