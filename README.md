# automl v0.0.1

## Overview

AutoML Engine


## Requirements

 - Python 2.7
 - scikit-learn 0.18.2
 - scipy 0.19.1
 - numpy 1.13.1
 - pandas 0.20.3
 - matplotlib 2.0.2
 - marvin-python-toolbox 0
 - Fabric 1.14.0
 - tpot 0.9.3


## Running

To run the docker container:

```
sudo docker pull marvinaiplatform/marvin-automl:0.0.1
```

```
sudo docker run --name=marvin-automl-0.0.1 --mount type=bind,source=$HOME/marvin/data,destination=/marvin-data -p 8000:8000 marvinaiplatform/marvin-automl:0.0.1
```

Access `http://localhost:8000/docs/` to use the API HTTP interface.

### Training a new model

To train a new model, use the `/pipeline` on API HTTP interface with the following 2 parameters options:

- For regression
```
{"params": {"url": "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv",
  "separator": ",",
  "encoding": "utf-8",
  "generations": 3,
  "population_size": 50,
  "config": "TPOT sparse",
  "target": "medv",
  "problem_type": "regression"},
 "message": [
   [0.00632, 18, 2.31, "0", 0.538, 6.575, 65.2, 4.09, 1, 296, 15.3, 396.9, 4.98]
 ]}
 ```
 
 - For classification
 ```
{"params": {"url": "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/d546eaee765268bf2f487608c537c05e22e4b221/iris.csv",
 "separator": ",",
 "encoding": "utf-8",
 "generations": 3,
 "population_size": 50,
 "config": "TPOT sparse",
 "target": "species",
 "problem_type": "classification"},
"message": [[5.1, 3.5, 1.4, 0.2]]}

```

After running pipeline, **restart the docker container** to reload the model artifact. This behavior will be fixed shortly.

### Predicting

To predict a new value, use the `/predictor` endpoint on API HTTP interface with the same 2 params above.

The `params` key is used to "configure" the automl code. The `message` key is used to input the values/features to predict.
