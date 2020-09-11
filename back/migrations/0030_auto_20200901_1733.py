# Generated by Django 3.1 on 2020-09-01 14:33

import back.models.worker
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0029_auto_20200901_1602'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='competency_issued_by',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='worker',
            name='registration_number',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='worker',
            name='special_competency',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
        migrations.AddField(
            model_name='worker',
            name='special_competency_scan',
            field=models.FileField(blank=True, null=True, upload_to=back.models.worker.project_docs_path),
        ),
    ]
