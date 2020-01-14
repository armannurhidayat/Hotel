# -*- coding: utf-8 -*-
{
    'name': "syntax_hotel_management",

    'summary': """
        Management Hotel
    """,

    'description': """
        Management Hotel Type Kamar, Fasilitas, Kamar
    """,

    'author': "Arman Nur Hidayat </syntax.dev>",
    'website': "https://github.com/armannurhidayat",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': [
            'base',
    ],

    'data': [
        'views/menu.xml',
        'views/management_fasilitas.xml',
        'views/management_type_kamar.xml',
        'views/management_kamar.xml',
        'security/ir.model.access.csv',
    ],
}