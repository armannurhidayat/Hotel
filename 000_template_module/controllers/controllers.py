# -*- coding: utf-8 -*-
from odoo import http

# class 000TemplateModule(http.Controller):
#     @http.route('/000_template_module/000_template_module/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/000_template_module/000_template_module/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('000_template_module.listing', {
#             'root': '/000_template_module/000_template_module',
#             'objects': http.request.env['000_template_module.000_template_module'].search([]),
#         })

#     @http.route('/000_template_module/000_template_module/objects/<model("000_template_module.000_template_module"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('000_template_module.object', {
#             'object': obj
#         })