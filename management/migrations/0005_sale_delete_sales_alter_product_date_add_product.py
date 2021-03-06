# Generated by Django 4.0.4 on 2022-04-29 23:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0004_sales_alter_product_date_add_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('date_of_purchase', models.DateTimeField(default=datetime.datetime(2022, 4, 30, 1, 10, 22, 993077), null=True)),
                ('total', models.FloatField(null=True)),
                ('notes', models.TextField(null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Sales',
        ),
        migrations.AlterField(
            model_name='product',
            name='date_add_product',
            field=models.DateTimeField(default=datetime.datetime(2022, 4, 30, 1, 10, 22, 993077), null=True),
        ),
    ]
