# Generated by Django 5.0.4 on 2024-05-25 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ponk", "0009_user_selected_skin"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="citation",
            field=models.CharField(default="", max_length=256),
        ),
        migrations.AlterField(
            model_name="user",
            name="selected_skin",
            field=models.CharField(default=""),
        ),
    ]