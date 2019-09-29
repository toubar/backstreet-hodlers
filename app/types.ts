export interface IDelivery {
    status: deliveryStatus
    id: string
    initiator: string
    deliverer: string
    from: string
    to: string
    description: string
    tokens: number
}

type deliveryStatus = "OPEN" | "IN_PROGRESS" | "COMPLETED"
