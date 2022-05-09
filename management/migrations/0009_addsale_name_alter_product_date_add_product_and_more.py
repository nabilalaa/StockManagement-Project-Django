# Generated by Django 4.0.4 on 2022-05-08 03:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0008_sale_sale_alter_product_date_add_product_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='addsale',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='date_add_product',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 8, 5, 4, 21, 223505), null=True),
        ),
        migrations.AlterField(
            model_name='sale',
            name='date_of_purchase',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 8, 5, 4, 21, 223505), null=True),
        ),
    ]
