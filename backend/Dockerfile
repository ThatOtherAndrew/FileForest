# syntax=docker/dockerfile:1

FROM python:3.10-slim-bullseye

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app

RUN pip install --upgrade pip
COPY requirements.txt .
RUN python3 -m venv /app/venv
RUN /app/venv/bin/pip install --no-cache-dir --upgrade -r requirements.txt

COPY src /app/src

EXPOSE 80
CMD [ \
    "/app/venv/bin/python", "-m", "uvicorn", \
    "src.main:app", \
    "--host", "backend", \
    "--port", "80", \
    "--root-path", "/api" \
]
