/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpsertUserDto } from './dto/upsert-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async upsert(dto: UpsertUserDto) {
    // Upsert: atualiza se existe, cria se não existe
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.usuario.upsert({
      where: { id: dto.id },
      update: {
        nome: dto.nome,
        email: dto.email,
        senhaHash: dto.senhaHash,
        cidade: dto.cidade,
        fotoUrl: dto.fotoUrl,
        role: dto.role,
        visibilidadeParticipacao: dto.visibilidadeParticipacao,
        ratingOrganizador: dto.ratingOrganizador,
      },
      create: {
        id: dto.id,
        nome: dto.nome,
        email: dto.email,
        senhaHash: dto.senhaHash,
        cidade: dto.cidade,
        fotoUrl: dto.fotoUrl,
        role: dto.role,
        visibilidadeParticipacao: dto.visibilidadeParticipacao,
        ratingOrganizador: dto.ratingOrganizador,
      },
    });
  }

  async findByClerkId(clerkId: string) {
    return this.prisma.usuario.findUnique({
      where: { id: clerkId },
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
      },
    });
  }
}
