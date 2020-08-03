FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
COPY FOX/templates/fox_admin/fox_admin.html /usr/local/lib/python3.8/site-packages/django/contrib/admin/templates/admin/base_site.html

# tell the port number the container should expose
EXPOSE 8000

CMD [ "python", "manage.py", "runserver",  "0.0.0.0:8000"]
