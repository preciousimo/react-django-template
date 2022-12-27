from django.db import models

class Sample_model(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name
