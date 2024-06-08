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
    return render_template('services/flights.html')


@bp.route('/hotels')
def hotels():
    return render_template('services/hotels.html')


@bp.route('/holidays')
def holidays():
    return render_template('services/holidays.html')


@bp.route('/insurance')
def insurance():
    return render_template('services/insurance.html')


@bp.route('/visa')
def visa():
    return render_template('services/visa.html')


@bp.route('/domestic')
def domestic():
    return render_template('services/domestic.html')


@bp.route('/international')
def international():
    return render_template('services/international.html')


@bp.route('/contact')
def contact():
    return render_template('company/contact.html')


@bp.route('/about')
def about():
    return render_template('company/about.html')

@bp.route('/testimonials')
def testimonials():
    return render_template('company/testimonials.html')

@bp.route('/spain')
def spain():
    return render_template('packages/spain.html')


@bp.route('/dubai')
def dubai():
    return render_template('packages/dubai.html')


@bp.route('/ourstory')
def ourstory():
    return render_template('company/ourstory.html')


@bp.route('/ourservices')
def ourservices():
    return render_template('company/ourservices.html')


@bp.route('/faq')
def faq():
    return render_template('company/faq.html')


@bp.route('/dubai4n5d')
def dubai4n5d():
    return render_template('packages/dubai4n5d.html')
