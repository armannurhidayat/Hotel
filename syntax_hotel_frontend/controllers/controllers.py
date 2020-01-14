# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class SyntaxHotelFrontend(http.Controller):
	@http.route('/index/', auth='public')
	def index(self, **kw):
		company_id = request.env['res.company'].search([('id', '=', 1)])
		# type_kamar = request.env['management.type_kamar']
		rooms = request.env['management.kamar'].search([('status', '=', True)], limit=8)
		
		return request.render("syntax_hotel_frontend.index", {
			'company_id': company_id,
			'rooms'		: rooms,
		})
