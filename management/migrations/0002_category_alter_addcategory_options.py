# Generated by Django 4.0.4 on 2022-04-17 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=50, null=True)),
            ],
            options={
                'verbose_name': 'categorie',
            },
        ),
        migrations.AlterModelOptions(
            name='addcategory',
            options={'verbose_name': 'categorie'},
        ),
    ]
