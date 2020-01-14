# -*- coding: utf-8 -*-

from odoo import models, fields, api

class HotelCompanyInherit(models.Model):
    _inherit = 'res.company'


    about = fields.Text(
        string='About',
    )

    history = fields.Text(
        string='History',
    )