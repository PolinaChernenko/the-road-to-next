
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";


type TicketPageProps = {
    params: {
        ticketid: string;
    },
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const ticket = await getTicket (params.ticketid);
     
    if (!ticket) {
        notFound();
     }

    return (
            <div className="flex justify-center animate-fade-from-top">
                <TicketItem ticket={ticket} isDetail/>
            </div>
    );
}

export default TicketPage;