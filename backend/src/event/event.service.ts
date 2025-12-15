/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 🔎 Buscar eventos com filtros
   */
  async findAll(params?: {
    search?: string;
    tipo?: 'GRATUITO' | 'PAGO';
  }) {
    const { search, tipo } = params || {};

    return this.prisma.evento.findMany({
      where: {
        AND: [
          search
            ? {
                titulo: {
                  contains: search,
                  mode: 'insensitive',
                },
              }
            : {},
          tipo
            ? {
                tipo,
              }
            : {},
        ],
      },
      orderBy: {
        dataInicio: 'asc',
      },
      include: {
        organizador: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });
  }

  /**
   * 🔍 Buscar evento por ID
   */
  async findById(id: string) {
    return this.prisma.evento.findUnique({
      where: { id },
      include: {
        organizador: {
          select: {
            id: true,
            nome: true,
          },
        },
        inscricoes: true,
        avaliacoes: true,
      },
    });
  }
}
