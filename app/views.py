# app/views.py
from flask import Blueprint, render_template
import time

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/home')
def home():
    return render_template('index.html')


@bp.route('/flights')
def flights():
    return render_template('flights.html')


@bp.route('/hotels')
def hotels():
    return render_template('hotels.html')


@bp.route('/holidays')
def holidays():
    return render_template('holidays.html')


@bp.route('/insurance')
def insurance():
    return render_template('insurance.html')


@bp.route('/visa')
def visa():
    return render_template('visa.html')


@bp.route('/contact')
def contact():
    return render_template('contact.html')


@bp.route('/about')
def about():
    return render_template('about.html')
