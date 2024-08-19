import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function checkIn(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/attendees/:attendeeId/check-in",
    {
      schema: {
        summary: "Check-in an attendee",
        tags: ["check-ins"],
        params: z.object({
          attendeeId: z.coerce.number().int(),
        }),
        response: {
          201: z.string(),
        },
      },
    },
    async (request, reply) => {
      const { attendeeId } = request.params;

      const attendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          attendeeId,
        },
      });

      if (attendeeCheckIn !== null) {
        throw new BadRequest("Attendee already checked in!");
      }

      await prisma.checkIn.create({
        data: {
          attendeeId,
        },
      });

      const htmlResponse = `
        <html>
          <body>
            <script>
              alert('Check-in realizado com sucesso!');
            </script>
          </body>
        </html>
      `;

      return reply
        .status(201)
        .header("Content-Type", "text/html")
        .send(htmlResponse);
    }
  );
}
