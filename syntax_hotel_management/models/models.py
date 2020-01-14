# -*- coding: utf-8 -*-

from odoo import models, fields, api

# =================== Type Kamar ==================== #
class ManagementTypeKamar(models.Model):
    _name = 'management.type_kamar'

    name = fields.Char(
        string='Name',
        required=True, 
    )


# =================== Fasilitas ==================== #
class ManagementFasilitas(models.Model):
    _name = 'management.fasilitas'

    name = fields.Char(
        string='Name',
        required=True,
    )


# =================== Kamar ==================== #
class ManagementKamar(models.Model):
    _name = 'management.kamar'

    name = fields.Char(
        string='Name',
        required=True, 
    )

    maksimal = fields.Integer(
        string='Maksimal',
    )

    type_kamar_id = fields.Many2one(
        'management.type_kamar',
        string='Type Kamar',
        required=True,
    )

    description = fields.Text(
        string='Description',
    )

    fasilitas_ids = fields.Many2many(
        'management.fasilitas',
        string='Fasilitas',
    )

    harga = fields.Integer(
        string='Harga',
    )

    img = fields.Binary(
        string='Gambar',
    )
    
    status = fields.Boolean(
        string='Status',
        default=True,
    )