# -*- coding: utf-8 -*-

from odoo import models, fields, api

# class 000_template_module(models.Model):
#     _name = '000_template_module.000_template_module'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100