FROM python:3.8-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend
COPY ./backend_project /app/backend_project
COPY ./api /app/api
COPY ./manage.py /app/manage.py
COPY ./requirements.txt /app/backend/
RUN pip install --upgrade pip && pip install -r /app/backend/requirements.txt
EXPOSE 8080
CMD ["python", "/app/manage.py", "runserver", "0.0.0.0:8080"]
