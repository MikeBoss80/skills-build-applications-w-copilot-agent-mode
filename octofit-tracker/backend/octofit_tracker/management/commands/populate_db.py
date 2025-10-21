from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Limpiar relaciones ManyToMany antes de borrar equipos y usuarios
        for team in Team.objects.exclude(id=None):
            team.members.clear()

        # Borrar datos existentes
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()
        Team.objects.exclude(id=None).delete()
        User.objects.exclude(id=None).delete()

        # Crear usuarios (superhéroes)

        marvel_heroes = [
            {'id': 1, 'username': 'ironman', 'email': 'ironman@marvel.com', 'first_name': 'Tony', 'last_name': 'Stark'},
            {'id': 2, 'username': 'spiderman', 'email': 'spiderman@marvel.com', 'first_name': 'Peter', 'last_name': 'Parker'},
            {'id': 3, 'username': 'captainamerica', 'email': 'cap@marvel.com', 'first_name': 'Steve', 'last_name': 'Rogers'},
        ]
        dc_heroes = [
            {'id': 4, 'username': 'batman', 'email': 'batman@dc.com', 'first_name': 'Bruce', 'last_name': 'Wayne'},
            {'id': 5, 'username': 'superman', 'email': 'superman@dc.com', 'first_name': 'Clark', 'last_name': 'Kent'},
            {'id': 6, 'username': 'wonderwoman', 'email': 'wonderwoman@dc.com', 'first_name': 'Diana', 'last_name': 'Prince'},
        ]
        marvel_users = [User.objects.create(**hero) for hero in marvel_heroes]
        dc_users = [User.objects.create(**hero) for hero in dc_heroes]

        # Crear equipos


        marvel_team = Team.objects.create(id=1, name='Marvel')
        marvel_team.save()
        marvel_team.members.set(marvel_users)
        dc_team = Team.objects.create(id=2, name='DC')
        dc_team.save()
        dc_team.members.set(dc_users)

        # Crear actividades


        Activity.objects.create(id=1, user=marvel_users[0], type='Correr', duration=30, calories=300, date='2025-10-21')
        Activity.objects.create(id=2, user=dc_users[0], type='Nadar', duration=45, calories=400, date='2025-10-21')

        # Crear leaderboard


        Leaderboard.objects.create(id=1, team=marvel_team, points=150)
        Leaderboard.objects.create(id=2, team=dc_team, points=120)

        # Crear entrenamientos


        Workout.objects.create(id=1, name='Cardio Marvel', description='Entrenamiento intenso de cardio', duration=40, difficulty='Alta', created_by=marvel_users[0])
        Workout.objects.create(id=2, name='Fuerza DC', description='Rutina de fuerza y resistencia', duration=50, difficulty='Media', created_by=dc_users[0])

        self.stdout.write(self.style.SUCCESS('La base de datos octofit_db ha sido poblada con datos de prueba.'))
