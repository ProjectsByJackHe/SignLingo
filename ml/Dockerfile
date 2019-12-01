FROM python:3.7-slim

RUN pip install -U pip
RUN pip install numpy==1.17.3 tensorflow==2.0.0 flask pillow flask-cors

COPY app /app

# Expose the port
EXPOSE 8080

# Set the working directory
WORKDIR /app

# Run the flask server for the endpoints
CMD python -u app.py
