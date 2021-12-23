## Installation

Upgrade pip
```bash
  python3 -m pip install --upgrade pip
```

Create virtual environment
```bash
  python3 -m venv venv
```

Activate virtual environment (MacOS, linux)
```bash
  source venv/bin/activate
```

Activate virtual environment (windows)
```bash
  venv\Scripts\activate
```

Install pip requirements
```bash
  python3 -m pip install -r requirements.txt
```
    
## Run Locally

Bash (MacOS, linux)
```bash
  export FLASK_APP=main
  export FLASK_ENV=development
  flask run
```

CDM (windows)
```cdm
  set FLASK_APP=main
  set FLASK_ENV=development
  flask run
```

Powershell (windows)
```powershell
  $env:FLASK_APP = "main"
  $env:FLASK_ENV = "development"
  flask run
```

Open http://localhost:5000/
