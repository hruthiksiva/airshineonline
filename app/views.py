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


@bp.route('/spain')
def spain():
    return render_template('spain.html')


@bp.route('/dubai')
def dubai():
    return render_template('dubai.html')


@bp.route('/ourstory')
def ourstory():
    return render_template('ourstory.html')


@bp.route('/ourservices')
def ourservices():
    return render_template('ourservices.html')