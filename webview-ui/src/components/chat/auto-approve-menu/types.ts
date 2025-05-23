import { AutoApprovalSettings } from "@shared/AutoApprovalSettings"

export interface ActionMetadata {
	// add to actions or extend?
	id: keyof AutoApprovalSettings["actions"] | "enableNotifications" | "enableAll" | "enableAutoApprove" | "enableAutoRetry"
	label: string
	shortName: string
	description: string
	icon: string
	subAction?: ActionMetadata
	sub?: boolean
	parentActionId?: string
}
