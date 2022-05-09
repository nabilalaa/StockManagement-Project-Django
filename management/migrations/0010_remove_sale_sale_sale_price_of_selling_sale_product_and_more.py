# Generated by Django 4.0.4 on 2022-05-09 04:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0009_addsale_name_alter_product_date_add_product_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sale',
            name='sale',
        ),
        migrations.AddField(
            model_name='sale',
            name='price_of_selling',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='sale',
            name='product',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='sale',
            name='quantity',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='sale',
            name='total',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='date_add_product',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 9, 6, 41, 18, 658561), null=True),
        ),
        migrations.AlterField(
            model_name='sale',
            name='date_of_purchase',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 9, 6, 41, 18, 658561), null=True),
        ),
        migrations.DeleteModel(
            name='Addsale',
        ),
    ]
