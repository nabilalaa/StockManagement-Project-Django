from django.db import models


class AddCategory(models.Model):
    category = models.CharField(null=True, max_length=50)

    def __str__(self):
        return self.category
    class Meta():
        verbose_name = "categorie"
