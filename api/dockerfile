FROM python:3.6 as base
ENV PYTHONUNBUFFERED=1

USER root
WORKDIR /api

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

FROM base as api-production
EXPOSE 8000
CMD ["python", "api.py"]
