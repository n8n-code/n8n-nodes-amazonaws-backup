import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Cancel Legal Hold",
					"value": "Cancel Legal Hold",
					"action": "Cancel Legal Hold",
					"description": "This action removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/legal-holds/{{$parameter[\"legalHoldId\"]}}#cancelDescription"
						}
					}
				},
				{
					"name": "Create Backup Plan",
					"value": "Create Backup Plan",
					"action": "Create Backup Plan",
					"description": "<p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup/plans/"
						}
					}
				},
				{
					"name": "List Backup Plans",
					"value": "List Backup Plans",
					"action": "List Backup Plans",
					"description": "Returns a list of all active backup plans for an authenticated account. The list contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/"
						}
					}
				},
				{
					"name": "Create Backup Selection",
					"value": "Create Backup Selection",
					"action": "Create Backup Selection",
					"description": "Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json\">Assigning resources programmatically</a>. ",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/selections/"
						}
					}
				},
				{
					"name": "List Backup Selections",
					"value": "List Backup Selections",
					"action": "List Backup Selections",
					"description": "Returns an array containing metadata of the resources associated with the target backup plan.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/selections/"
						}
					}
				},
				{
					"name": "Create Backup Vault",
					"value": "Create Backup Vault",
					"action": "Create Backup Vault",
					"description": "<p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Do not include sensitive data, such as passport numbers, in the name of a backup vault.</p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}"
						}
					}
				},
				{
					"name": "Delete Backup Vault",
					"value": "Delete Backup Vault",
					"action": "Delete Backup Vault",
					"description": "Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}"
						}
					}
				},
				{
					"name": "Describe Backup Vault",
					"value": "Describe Backup Vault",
					"action": "Describe Backup Vault",
					"description": "Returns metadata about a backup vault specified by its name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}"
						}
					}
				},
				{
					"name": "Create Framework",
					"value": "Create Framework",
					"action": "Create Framework",
					"description": "Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/audit/frameworks"
						}
					}
				},
				{
					"name": "List Frameworks",
					"value": "List Frameworks",
					"action": "List Frameworks",
					"description": "Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/frameworks"
						}
					}
				},
				{
					"name": "Create Legal Hold",
					"value": "Create Legal Hold",
					"action": "Create Legal Hold",
					"description": "This action creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/legal-holds/"
						}
					}
				},
				{
					"name": "List Legal Holds",
					"value": "List Legal Holds",
					"action": "List Legal Holds",
					"description": "This action returns metadata about active and previous legal holds.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal-holds/"
						}
					}
				},
				{
					"name": "Create Report Plan",
					"value": "Create Report Plan",
					"action": "Create Report Plan",
					"description": "<p>Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it.</p> <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive an <code>AlreadyExistsException</code> exception.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/audit/report-plans"
						}
					}
				},
				{
					"name": "List Report Plans",
					"value": "List Report Plans",
					"action": "List Report Plans",
					"description": "Returns a list of your report plans. For detailed information about a single report plan, use <code>DescribeReportPlan</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/report-plans"
						}
					}
				},
				{
					"name": "Delete Backup Plan",
					"value": "Delete Backup Plan",
					"action": "Delete Backup Plan",
					"description": "Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}"
						}
					}
				},
				{
					"name": "Update Backup Plan",
					"value": "Update Backup Plan",
					"action": "Update Backup Plan",
					"description": "Updates an existing backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}"
						}
					}
				},
				{
					"name": "Delete Backup Selection",
					"value": "Delete Backup Selection",
					"action": "Delete Backup Selection",
					"description": "Deletes the resource selection associated with a backup plan that is specified by the <code>SelectionId</code>.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/selections/{{$parameter[\"selectionId\"]}}"
						}
					}
				},
				{
					"name": "Get Backup Selection",
					"value": "Get Backup Selection",
					"action": "Get Backup Selection",
					"description": "Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/selections/{{$parameter[\"selectionId\"]}}"
						}
					}
				},
				{
					"name": "Delete Backup Vault Access Policy",
					"value": "Delete Backup Vault Access Policy",
					"action": "Delete Backup Vault Access Policy",
					"description": "Deletes the policy document that manages permissions on a backup vault.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/access-policy"
						}
					}
				},
				{
					"name": "Get Backup Vault Access Policy",
					"value": "Get Backup Vault Access Policy",
					"action": "Get Backup Vault Access Policy",
					"description": "Returns the access policy document that is associated with the named backup vault.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/access-policy"
						}
					}
				},
				{
					"name": "Put Backup Vault Access Policy",
					"value": "Put Backup Vault Access Policy",
					"action": "Put Backup Vault Access Policy",
					"description": "Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/access-policy"
						}
					}
				},
				{
					"name": "Delete Backup Vault Lock Configuration",
					"value": "Delete Backup Vault Lock Configuration",
					"action": "Delete Backup Vault Lock Configuration",
					"description": "<p>Deletes Backup Vault Lock from a backup vault specified by a backup vault name.</p> <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an <code>InvalidRequestException</code> if you attempt to do so. For more information, see <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html\">Vault Lock</a> in the <i>Backup Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/vault-lock"
						}
					}
				},
				{
					"name": "Put Backup Vault Lock Configuration",
					"value": "Put Backup Vault Lock Configuration",
					"action": "Put Backup Vault Lock Configuration",
					"description": "<p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.</p> <note> <p>Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the <a href=\"samples/cohassetreport.zip\">Cohasset Associates Compliance Assessment.</a> </p> </note>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/vault-lock"
						}
					}
				},
				{
					"name": "Delete Backup Vault Notifications",
					"value": "Delete Backup Vault Notifications",
					"action": "Delete Backup Vault Notifications",
					"description": "Deletes event notifications for the specified backup vault.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/notification-configuration"
						}
					}
				},
				{
					"name": "Get Backup Vault Notifications",
					"value": "Get Backup Vault Notifications",
					"action": "Get Backup Vault Notifications",
					"description": "Returns event notifications for the specified backup vault.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/notification-configuration"
						}
					}
				},
				{
					"name": "Put Backup Vault Notifications",
					"value": "Put Backup Vault Notifications",
					"action": "Put Backup Vault Notifications",
					"description": "Turns on notifications on a backup vault for the specified topic and events.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/notification-configuration"
						}
					}
				},
				{
					"name": "Delete Framework",
					"value": "Delete Framework",
					"action": "Delete Framework",
					"description": "Deletes the framework specified by a framework name.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/audit/frameworks/{{$parameter[\"frameworkName\"]}}"
						}
					}
				},
				{
					"name": "Describe Framework",
					"value": "Describe Framework",
					"action": "Describe Framework",
					"description": "Returns the framework details for the specified <code>FrameworkName</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/frameworks/{{$parameter[\"frameworkName\"]}}"
						}
					}
				},
				{
					"name": "Update Framework",
					"value": "Update Framework",
					"action": "Update Framework",
					"description": "Updates an existing framework identified by its <code>FrameworkName</code> with the input document in JSON format.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/audit/frameworks/{{$parameter[\"frameworkName\"]}}"
						}
					}
				},
				{
					"name": "Delete Recovery Point",
					"value": "Delete Recovery Point",
					"action": "Delete Recovery Point",
					"description": "<p>Deletes the recovery point specified by a recovery point ID.</p> <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup.</p> <p>When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an <code>EXPIRED</code> state.</p> <p> <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting\"> Troubleshooting manual deletions</a>.</p> <p>If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Recovery Point",
					"value": "Describe Recovery Point",
					"action": "Describe Recovery Point",
					"description": "Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}"
						}
					}
				},
				{
					"name": "Update Recovery Point Lifecycle",
					"value": "Update Recovery Point Lifecycle",
					"action": "Update Recovery Point Lifecycle",
					"description": "<p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the \"Lifecycle to cold storage\" section of the <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource\"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p> <p>This operation does not support continuous backups.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}"
						}
					}
				},
				{
					"name": "Delete Report Plan",
					"value": "Delete Report Plan",
					"action": "Delete Report Plan",
					"description": "Deletes the report plan specified by a report plan name.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/audit/report-plans/{{$parameter[\"reportPlanName\"]}}"
						}
					}
				},
				{
					"name": "Describe Report Plan",
					"value": "Describe Report Plan",
					"action": "Describe Report Plan",
					"description": "Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/report-plans/{{$parameter[\"reportPlanName\"]}}"
						}
					}
				},
				{
					"name": "Update Report Plan",
					"value": "Update Report Plan",
					"action": "Update Report Plan",
					"description": "Updates an existing report plan identified by its <code>ReportPlanName</code> with the input document in JSON format.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/audit/report-plans/{{$parameter[\"reportPlanName\"]}}"
						}
					}
				},
				{
					"name": "Describe Backup Job",
					"value": "Describe Backup Job",
					"action": "Describe Backup Job",
					"description": "Returns backup job details for the specified <code>BackupJobId</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-jobs/{{$parameter[\"backupJobId\"]}}"
						}
					}
				},
				{
					"name": "Stop Backup Job",
					"value": "Stop Backup Job",
					"action": "Stop Backup Job",
					"description": "<p>Attempts to cancel a job to create a one-time backup of a resource.</p> <p>This action is not supported for the following services: Amazon FSx for Windows File Server, Amazon FSx for Lustre, FSx for ONTAP , Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora, and Amazon Neptune.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/backup-jobs/{{$parameter[\"backupJobId\"]}}"
						}
					}
				},
				{
					"name": "Describe Copy Job",
					"value": "Describe Copy Job",
					"action": "Describe Copy Job",
					"description": "Returns metadata associated with creating a copy of a resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/copy-jobs/{{$parameter[\"copyJobId\"]}}"
						}
					}
				},
				{
					"name": "Describe Global Settings",
					"value": "Describe Global Settings",
					"action": "Describe Global Settings",
					"description": "Describes whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not a member of an Organizations organization. Example: <code>describe-global-settings --region us-west-2</code> ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/global-settings"
						}
					}
				},
				{
					"name": "Update Global Settings",
					"value": "Update Global Settings",
					"action": "Update Global Settings",
					"description": "Updates whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not an Organizations management account. Use the <code>DescribeGlobalSettings</code> API to determine the current settings.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/global-settings"
						}
					}
				},
				{
					"name": "Describe Protected Resource",
					"value": "Describe Protected Resource",
					"action": "Describe Protected Resource",
					"description": "Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/{{$parameter[\"resourceArn\"]}}"
						}
					}
				},
				{
					"name": "Describe Region Settings",
					"value": "Describe Region Settings",
					"action": "Describe Region Settings",
					"description": "Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account-settings"
						}
					}
				},
				{
					"name": "Update Region Settings",
					"value": "Update Region Settings",
					"action": "Update Region Settings",
					"description": "Updates the current service opt-in settings for the Region. If service-opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region. Use the <code>DescribeRegionSettings</code> API to determine the resource types that are supported.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account-settings"
						}
					}
				},
				{
					"name": "Describe Report Job",
					"value": "Describe Report Job",
					"action": "Describe Report Job",
					"description": "Returns the details associated with creating a report as specified by its <code>ReportJobId</code>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/report-jobs/{{$parameter[\"reportJobId\"]}}"
						}
					}
				},
				{
					"name": "Describe Restore Job",
					"value": "Describe Restore Job",
					"action": "Describe Restore Job",
					"description": "Returns metadata associated with a restore job that is specified by a job ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restore-jobs/{{$parameter[\"restoreJobId\"]}}"
						}
					}
				},
				{
					"name": "Disassociate Recovery Point",
					"value": "Disassociate Recovery Point",
					"action": "Disassociate Recovery Point",
					"description": "<p>Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan.</p> <p>Does not support snapshot backup recovery points.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}/disassociate"
						}
					}
				},
				{
					"name": "Disassociate Recovery Point From Parent",
					"value": "Disassociate Recovery Point From Parent",
					"action": "Disassociate Recovery Point From Parent",
					"description": "This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}/parentAssociation"
						}
					}
				},
				{
					"name": "Export Backup Plan Template",
					"value": "Export Backup Plan Template",
					"action": "Export Backup Plan Template",
					"description": "Returns the backup plan that is specified by the plan ID as a backup template.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/toTemplate/"
						}
					}
				},
				{
					"name": "Get Backup Plan",
					"value": "Get Backup Plan",
					"action": "Get Backup Plan",
					"description": "Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The details are the body of a backup plan in JSON format, in addition to plan metadata.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/"
						}
					}
				},
				{
					"name": "Get Backup Plan From JSON",
					"value": "Get Backup Plan From JSON",
					"action": "Get Backup Plan From JSON",
					"description": "Returns a valid JSON document specifying a backup plan or an error.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/backup/template/json/toPlan"
						}
					}
				},
				{
					"name": "Get Backup Plan From Template",
					"value": "Get Backup Plan From Template",
					"action": "Get Backup Plan From Template",
					"description": "Returns the template specified by its <code>templateId</code> as a backup plan.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/template/plans/{{$parameter[\"templateId\"]}}/toPlan"
						}
					}
				},
				{
					"name": "Get Legal Hold",
					"value": "Get Legal Hold",
					"action": "Get Legal Hold",
					"description": "This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal-holds/{{$parameter[\"legalHoldId\"]}}/"
						}
					}
				},
				{
					"name": "Get Recovery Point Restore Metadata",
					"value": "Get Recovery Point Restore Metadata",
					"action": "Get Recovery Point Restore Metadata",
					"description": "Returns a set of metadata key-value pairs that were used to create the backup.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/{{$parameter[\"recoveryPointArn\"]}}/restore-metadata"
						}
					}
				},
				{
					"name": "Get Supported Resource Types",
					"value": "Get Supported Resource Types",
					"action": "Get Supported Resource Types",
					"description": "Returns the Amazon Web Services resource types supported by Backup.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/supported-resource-types"
						}
					}
				},
				{
					"name": "List Backup Jobs",
					"value": "List Backup Jobs",
					"action": "List Backup Jobs",
					"description": "Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html\">monitoring tools</a>.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-jobs/"
						}
					}
				},
				{
					"name": "List Backup Plan Templates",
					"value": "List Backup Plan Templates",
					"action": "List Backup Plan Templates",
					"description": "Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/template/plans"
						}
					}
				},
				{
					"name": "List Backup Plan Versions",
					"value": "List Backup Plan Versions",
					"action": "List Backup Plan Versions",
					"description": "Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup/plans/{{$parameter[\"backupPlanId\"]}}/versions/"
						}
					}
				},
				{
					"name": "List Backup Vaults",
					"value": "List Backup Vaults",
					"action": "List Backup Vaults",
					"description": "Returns a list of recovery point storage containers along with information about them.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/"
						}
					}
				},
				{
					"name": "List Copy Jobs",
					"value": "List Copy Jobs",
					"action": "List Copy Jobs",
					"description": "Returns metadata about your copy jobs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/copy-jobs/"
						}
					}
				},
				{
					"name": "List Protected Resources",
					"value": "List Protected Resources",
					"action": "List Protected Resources",
					"description": "Returns an array of resources successfully backed up by Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/"
						}
					}
				},
				{
					"name": "List Recovery Points By Backup Vault",
					"value": "List Recovery Points By Backup Vault",
					"action": "List Recovery Points By Backup Vault",
					"description": "Returns detailed information about the recovery points stored in a backup vault.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/backup-vaults/{{$parameter[\"backupVaultName\"]}}/recovery-points/"
						}
					}
				},
				{
					"name": "List Recovery Points By Legal Hold",
					"value": "List Recovery Points By Legal Hold",
					"action": "List Recovery Points By Legal Hold",
					"description": "This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/legal-holds/{{$parameter[\"legalHoldId\"]}}/recovery-points"
						}
					}
				},
				{
					"name": "List Recovery Points By Resource",
					"value": "List Recovery Points By Resource",
					"action": "List Recovery Points By Resource",
					"description": "<p>Returns detailed information about all the recovery points of the type specified by a resource Amazon Resource Name (ARN).</p> <note> <p>For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.</p> </note>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/resources/{{$parameter[\"resourceArn\"]}}/recovery-points/"
						}
					}
				},
				{
					"name": "List Report Jobs",
					"value": "List Report Jobs",
					"action": "List Report Jobs",
					"description": "Returns details about your report jobs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audit/report-jobs"
						}
					}
				},
				{
					"name": "List Restore Jobs",
					"value": "List Restore Jobs",
					"action": "List Restore Jobs",
					"description": "Returns a list of jobs that Backup initiated to restore a saved resource, including details about the recovery process.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restore-jobs/"
						}
					}
				},
				{
					"name": "List Tags",
					"value": "List Tags",
					"action": "List Tags",
					"description": "<p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p> <p> <code>ListTags</code> only works for resource types that support full Backup management of their backups. Those resource types are listed in the \"Full Backup management\" section of the <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource\"> Feature availability by resource</a> table.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tags/{{$parameter[\"resourceArn\"]}}/"
						}
					}
				},
				{
					"name": "Start Backup Job",
					"value": "Start Backup Job",
					"action": "Start Backup Job",
					"description": "Starts an on-demand backup job for the specified resource.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/backup-jobs"
						}
					}
				},
				{
					"name": "Start Copy Job",
					"value": "Start Copy Job",
					"action": "Start Copy Job",
					"description": "<p>Starts a job to create a one-time copy of the specified resource.</p> <p>Does not support continuous backups.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/copy-jobs"
						}
					}
				},
				{
					"name": "Start Report Job",
					"value": "Start Report Job",
					"action": "Start Report Job",
					"description": "Starts an on-demand report job for the specified report plan.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/audit/report-jobs/{{$parameter[\"reportPlanName\"]}}"
						}
					}
				},
				{
					"name": "Start Restore Job",
					"value": "Start Restore Job",
					"action": "Start Restore Job",
					"description": "Recovers the saved resource identified by an Amazon Resource Name (ARN).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restore-jobs"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tags/{{$parameter[\"resourceArn\"]}}"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/untag/{{$parameter[\"resourceArn\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /legal-holds/{legalHoldId}#cancelDescription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Legal Hold ID",
			"name": "legalHoldId",
			"required": true,
			"description": "Legal hold ID required to remove the specified legal hold on a recovery point.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Cancel Description",
			"name": "cancelDescription",
			"required": true,
			"description": "String describing the reason for removing the legal hold.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cancelDescription",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Retain Record In Days",
			"name": "retainRecordInDays",
			"description": "The integer amount in days specifying amount of days after this API operation to remove legal hold.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "retainRecordInDays",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup/plans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Plan",
			"name": "BackupPlan",
			"type": "json",
			"default": "{\n  \"Rules\": {},\n  \"AdvancedBackupSettings\": {}\n}",
			"description": "Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. ",
			"routing": {
				"send": {
					"property": "BackupPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan Tags",
			"name": "BackupPlanTags",
			"type": "json",
			"default": "{}",
			"description": "To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.",
			"routing": {
				"send": {
					"property": "BackupPlanTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Creator Request ID",
			"name": "CreatorRequestId",
			"type": "string",
			"default": "",
			"description": "<p>Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
			"routing": {
				"send": {
					"property": "CreatorRequestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Include Deleted",
			"name": "includeDeleted",
			"description": "A Boolean value with a default value of <code>FALSE</code> that returns deleted backup plans when set to <code>TRUE</code>.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeDeleted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plans"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup/plans/{backupPlanId}/selections/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies the backup plan to be associated with the selection of resources.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Selection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Selection",
			"name": "BackupSelection",
			"type": "json",
			"default": "{\n  \"IamRoleArn\": {},\n  \"Resources\": {},\n  \"ListOfTags\": {},\n  \"NotResources\": {},\n  \"Conditions\": {}\n}",
			"description": "<p>Used to specify a set of resources to a backup plan.</p> <p>Specifying your desired <code>Conditions</code>, <code>ListOfTags</code>, <code>NotResources</code>, and/or <code>Resources</code> is recommended. If none of these are specified, Backup will attempt to select all supported and opted-in storage resources, which could have unintended cost implications.</p>",
			"routing": {
				"send": {
					"property": "BackupSelection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Creator Request ID",
			"name": "CreatorRequestId",
			"type": "string",
			"default": "",
			"description": "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
			"routing": {
				"send": {
					"property": "CreatorRequestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/{backupPlanId}/selections/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Selections"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup-vaults/{backupVaultName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Tags",
			"name": "BackupVaultTags",
			"type": "json",
			"default": "{}",
			"description": "Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "BackupVaultTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Encryption Key Arn",
			"name": "EncryptionKeyArn",
			"type": "string",
			"default": "",
			"description": "The server-side encryption key that is used to protect your backups; for example, <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.",
			"routing": {
				"send": {
					"property": "EncryptionKeyArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Creator Request ID",
			"name": "CreatorRequestId",
			"type": "string",
			"default": "",
			"description": "<p>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional.</p> <p>If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</p>",
			"routing": {
				"send": {
					"property": "CreatorRequestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "POST /audit/frameworks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Framework Name",
			"name": "FrameworkName",
			"type": "string",
			"default": "",
			"description": "The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
			"routing": {
				"send": {
					"property": "FrameworkName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Description",
			"name": "FrameworkDescription",
			"type": "string",
			"default": "",
			"description": "An optional description of the framework with a maximum of 1,024 characters.",
			"routing": {
				"send": {
					"property": "FrameworkDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Framework Controls",
			"name": "FrameworkControls",
			"type": "json",
			"default": "[\n  {\n    \"ControlInputParameters\": {},\n    \"ControlScope\": {}\n  }\n]",
			"description": "A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.",
			"routing": {
				"send": {
					"property": "FrameworkControls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Tags",
			"name": "FrameworkTags",
			"type": "json",
			"default": "{}",
			"description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "FrameworkTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Framework"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/frameworks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Frameworks"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Frameworks"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Frameworks"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Frameworks"
					]
				}
			}
		},
		{
			"displayName": "POST /legal-holds/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "",
			"description": "This is the string title of the legal hold.",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "Description",
			"type": "string",
			"default": "",
			"description": "This is the string description of the legal hold.",
			"routing": {
				"send": {
					"property": "Description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Selection",
			"name": "RecoveryPointSelection",
			"type": "json",
			"default": "{\n  \"VaultNames\": [\n    null\n  ],\n  \"ResourceIdentifiers\": {},\n  \"DateRange\": {\n    \"FromDate\": {},\n    \"ToDate\": {}\n  }\n}",
			"description": "This specifies criteria to assign a set of resources, such as resource types or backup vaults.",
			"routing": {
				"send": {
					"property": "RecoveryPointSelection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /. ",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "GET /legal-holds/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of resource list items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Legal Holds"
					]
				}
			}
		},
		{
			"displayName": "POST /audit/report-plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Plan Name",
			"name": "ReportPlanName",
			"type": "string",
			"default": "",
			"description": "The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
			"routing": {
				"send": {
					"property": "ReportPlanName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Description",
			"name": "ReportPlanDescription",
			"type": "string",
			"default": "",
			"description": "An optional description of the report plan with a maximum of 1,024 characters.",
			"routing": {
				"send": {
					"property": "ReportPlanDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Delivery Channel",
			"name": "ReportDeliveryChannel",
			"type": "json",
			"default": "{\n  \"S3KeyPrefix\": {},\n  \"Formats\": {}\n}",
			"description": "Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.",
			"routing": {
				"send": {
					"property": "ReportDeliveryChannel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Report Setting",
			"name": "ReportSetting",
			"type": "json",
			"default": "{\n  \"FrameworkArns\": {},\n  \"NumberOfFrameworks\": {},\n  \"Accounts\": {},\n  \"OrganizationUnits\": {},\n  \"Regions\": {}\n}",
			"description": "Contains detailed information about a report setting.",
			"routing": {
				"send": {
					"property": "ReportSetting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Tags",
			"name": "ReportPlanTags",
			"type": "json",
			"default": "{}",
			"description": "Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "ReportPlanTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>CreateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Report Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/report-plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Plans"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Plans"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Plans"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Plans"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup/plans/{backupPlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "POST /backup/plans/{backupPlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Backup Plan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Plan",
			"name": "BackupPlan",
			"type": "json",
			"default": "{\n  \"Rules\": {},\n  \"AdvancedBackupSettings\": {}\n}",
			"description": "Contains an optional backup plan display name and an array of <code>BackupRule</code> objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task. ",
			"routing": {
				"send": {
					"property": "BackupPlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup/plans/{backupPlanId}/selections/{selectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Selection ID",
			"name": "selectionId",
			"required": true,
			"description": "Uniquely identifies the body of a request to assign a set of resources to a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/{backupPlanId}/selections/{selectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Selection ID",
			"name": "selectionId",
			"required": true,
			"description": "Uniquely identifies the body of a request to assign a set of resources to a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Selection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}/access-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}/access-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup-vaults/{backupVaultName}/access-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Policy",
			"name": "Policy",
			"type": "string",
			"default": "",
			"description": "The backup vault access policy document in JSON format.",
			"routing": {
				"send": {
					"property": "Policy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Access Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}/vault-lock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of the backup vault from which to delete Backup Vault Lock.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup-vaults/{backupVaultName}/vault-lock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The Backup Vault Lock configuration that specifies the name of the backup vault it protects.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Min Retention Days",
			"name": "MinRetentionDays",
			"type": "number",
			"default": 0,
			"description": "<p>The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).</p> <p>If this parameter is not specified, Vault Lock will not enforce a minimum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
			"routing": {
				"send": {
					"property": "MinRetentionDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Max Retention Days",
			"name": "MaxRetentionDays",
			"type": "number",
			"default": 0,
			"description": "<p>The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).</p> <p>If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.</p> <p>If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected.</p>",
			"routing": {
				"send": {
					"property": "MaxRetentionDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Changeable For Days",
			"name": "ChangeableForDays",
			"type": "number",
			"default": 0,
			"description": "<p>The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting <code>ChangeableForDays</code> to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.</p> <p>Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set <code>ChangeableForDays</code> to 3 or greater.</p> <p>Before the lock date, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code>. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.</p> <p>If this parameter is not specified, you can delete Vault Lock from the vault using <code>DeleteBackupVaultLockConfiguration</code> or change the Vault Lock configuration using <code>PutBackupVaultLockConfiguration</code> at any time.</p>",
			"routing": {
				"send": {
					"property": "ChangeableForDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Lock Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}/notification-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}/notification-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup-vaults/{backupVaultName}/notification-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Notifications"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "SNS Topic Arn",
			"name": "SNSTopicArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, <code>arn:aws:sns:us-west-2:111122223333:MyVaultTopic</code>.",
			"routing": {
				"send": {
					"property": "SNSTopicArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Notifications"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Vault Events",
			"name": "BackupVaultEvents",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>An array of events that indicate the status of jobs to back up resources to the backup vault.</p> <p>For common use cases and code samples, see <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html\">Using Amazon SNS to track Backup events</a>.</p> <p>The following events are supported:</p> <ul> <li> <p> <code>BACKUP_JOB_STARTED</code> | <code>BACKUP_JOB_COMPLETED</code> </p> </li> <li> <p> <code>COPY_JOB_STARTED</code> | <code>COPY_JOB_SUCCESSFUL</code> | <code>COPY_JOB_FAILED</code> </p> </li> <li> <p> <code>RESTORE_JOB_STARTED</code> | <code>RESTORE_JOB_COMPLETED</code> | <code>RECOVERY_POINT_MODIFIED</code> </p> </li> <li> <p> <code>S3_BACKUP_OBJECT_FAILED</code> | <code>S3_RESTORE_OBJECT_FAILED</code> </p> </li> </ul> <note> <p>The list below shows items that are deprecated events (for reference) and are no longer in use. They are no longer supported and will not return statuses or notifications. Refer to the list above for current supported events.</p> </note>",
			"routing": {
				"send": {
					"property": "BackupVaultEvents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Backup Vault Notifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /audit/frameworks/{frameworkName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Name",
			"name": "frameworkName",
			"required": true,
			"description": "The unique name of a framework.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Framework"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Framework"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/frameworks/{frameworkName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Name",
			"name": "frameworkName",
			"required": true,
			"description": "The unique name of a framework.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Framework"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Framework"
					]
				}
			}
		},
		{
			"displayName": "PUT /audit/frameworks/{frameworkName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Name",
			"name": "frameworkName",
			"required": true,
			"description": "The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Description",
			"name": "FrameworkDescription",
			"type": "string",
			"default": "",
			"description": "An optional description of the framework with a maximum 1,024 characters.",
			"routing": {
				"send": {
					"property": "FrameworkDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "Framework Controls",
			"name": "FrameworkControls",
			"type": "json",
			"default": "[\n  {\n    \"ControlInputParameters\": {},\n    \"ControlScope\": {}\n  }\n]",
			"description": "A list of the controls that make up the framework. Each control in the list has a name, input parameters, and scope.",
			"routing": {
				"send": {
					"property": "FrameworkControls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateFrameworkInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Framework"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "POST /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Recovery Point Lifecycle"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Recovery Point Lifecycle"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Recovery Point Lifecycle"
					]
				}
			}
		},
		{
			"displayName": "Lifecycle",
			"name": "Lifecycle",
			"type": "json",
			"default": "{\n  \"DeleteAfterDays\": {}\n}",
			"description": "<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the \"Lifecycle to cold storage\" section of the <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource\"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>",
			"routing": {
				"send": {
					"property": "Lifecycle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Recovery Point Lifecycle"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Recovery Point Lifecycle"
					]
				}
			}
		},
		{
			"displayName": "DELETE /audit/report-plans/{reportPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Name",
			"name": "reportPlanName",
			"required": true,
			"description": "The unique name of a report plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Report Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/report-plans/{reportPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Name",
			"name": "reportPlanName",
			"required": true,
			"description": "The unique name of a report plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Plan"
					]
				}
			}
		},
		{
			"displayName": "PUT /audit/report-plans/{reportPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Name",
			"name": "reportPlanName",
			"required": true,
			"description": "The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Description",
			"name": "ReportPlanDescription",
			"type": "string",
			"default": "",
			"description": "An optional description of the report plan with a maximum 1,024 characters.",
			"routing": {
				"send": {
					"property": "ReportPlanDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Delivery Channel",
			"name": "ReportDeliveryChannel",
			"type": "json",
			"default": "{\n  \"S3KeyPrefix\": {},\n  \"Formats\": {}\n}",
			"description": "Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.",
			"routing": {
				"send": {
					"property": "ReportDeliveryChannel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Report Setting",
			"name": "ReportSetting",
			"type": "json",
			"default": "{\n  \"FrameworkArns\": {},\n  \"NumberOfFrameworks\": {},\n  \"Accounts\": {},\n  \"OrganizationUnits\": {},\n  \"Regions\": {}\n}",
			"description": "Contains detailed information about a report setting.",
			"routing": {
				"send": {
					"property": "ReportSetting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>UpdateReportPlanInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Report Plan"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-jobs/{backupJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Backup Job ID",
			"name": "backupJobId",
			"required": true,
			"description": "Uniquely identifies a request to Backup to back up a resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backup Job"
					]
				}
			}
		},
		{
			"displayName": "POST /backup-jobs/{backupJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Backup Job ID",
			"name": "backupJobId",
			"required": true,
			"description": "Uniquely identifies a request to Backup to back up a resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Backup Job"
					]
				}
			}
		},
		{
			"displayName": "GET /copy-jobs/{copyJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Copy Job"
					]
				}
			}
		},
		{
			"displayName": "Copy Job ID",
			"name": "copyJobId",
			"required": true,
			"description": "Uniquely identifies a copy job.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Copy Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Copy Job"
					]
				}
			}
		},
		{
			"displayName": "GET /global-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Global Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /global-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Global Settings",
			"name": "GlobalSettings",
			"type": "json",
			"default": "{}",
			"description": "A value for <code>isCrossAccountBackupEnabled</code> and a Region. Example: <code>update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2</code>.",
			"routing": {
				"send": {
					"property": "GlobalSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Global Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/{resourceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Protected Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Protected Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Protected Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /account-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Region Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Region Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /account-settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Region Settings"
					]
				}
			}
		},
		{
			"displayName": "Resource Type Opt In Preference",
			"name": "ResourceTypeOptInPreference",
			"type": "json",
			"default": "{}",
			"description": "Updates the list of services along with the opt-in preferences for the Region.",
			"routing": {
				"send": {
					"property": "ResourceTypeOptInPreference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Region Settings"
					]
				}
			}
		},
		{
			"displayName": "Resource Type Management Preference",
			"name": "ResourceTypeManagementPreference",
			"type": "json",
			"default": "{}",
			"description": "Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html\"> Backup's advanced DynamoDB backup features</a>, follow the procedure to <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/advanced-ddb-backup.html#advanced-ddb-backup-enable-cli\"> enable advanced DynamoDB backup programmatically</a>.",
			"routing": {
				"send": {
					"property": "ResourceTypeManagementPreference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Region Settings"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Region Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/report-jobs/{reportJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Job"
					]
				}
			}
		},
		{
			"displayName": "Report Job ID",
			"name": "reportJobId",
			"required": true,
			"description": "The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Report Job"
					]
				}
			}
		},
		{
			"displayName": "GET /restore-jobs/{restoreJobId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Restore Job ID",
			"name": "restoreJobId",
			"required": true,
			"description": "Uniquely identifies the job that restores a recovery point.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Restore Job"
					]
				}
			}
		},
		{
			"displayName": "POST /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/disassociate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The unique name of an Backup vault.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point"
					]
				}
			}
		},
		{
			"displayName": "DELETE /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/parentAssociation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point From Parent"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "This is the name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point From Parent"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "This is the Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</code> ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point From Parent"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Recovery Point From Parent"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/{backupPlanId}/toTemplate/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Backup Plan Template"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Backup Plan Template"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Export Backup Plan Template"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/{backupPlanId}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Version ID",
			"name": "versionId",
			"description": "Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "versionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan"
					]
				}
			}
		},
		{
			"displayName": "POST /backup/template/json/toPlan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From JSON"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Plan Template JSON",
			"name": "BackupPlanTemplateJson",
			"type": "string",
			"default": "",
			"description": "A customer-supplied backup plan document in JSON format.",
			"routing": {
				"send": {
					"property": "BackupPlanTemplateJson",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From JSON"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/template/plans/{templateId}/toPlan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From Template"
					]
				}
			}
		},
		{
			"displayName": "Template ID",
			"name": "templateId",
			"required": true,
			"description": "Uniquely identifies a stored backup plan template.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From Template"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Backup Plan From Template"
					]
				}
			}
		},
		{
			"displayName": "GET /legal-holds/{legalHoldId}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Legal Hold ID",
			"name": "legalHoldId",
			"required": true,
			"description": "This is the ID required to use <code>GetLegalHold</code>. This unique ID is associated with a specific legal hold.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Recovery Point Restore Metadata"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Recovery Point Restore Metadata"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Arn",
			"name": "recoveryPointArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Recovery Point Restore Metadata"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Recovery Point Restore Metadata"
					]
				}
			}
		},
		{
			"displayName": "GET /supported-resource-types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Supported Resource Types"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Supported Resource Types"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-jobs/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"description": "Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "Returns only backup jobs that are in the specified state.",
			"default": "CREATED",
			"type": "options",
			"options": [
				{
					"name": "CREATED",
					"value": "CREATED"
				},
				{
					"name": "PENDING",
					"value": "PENDING"
				},
				{
					"name": "RUNNING",
					"value": "RUNNING"
				},
				{
					"name": "ABORTING",
					"value": "ABORTING"
				},
				{
					"name": "ABORTED",
					"value": "ABORTED"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				},
				{
					"name": "EXPIRED",
					"value": "EXPIRED"
				},
				{
					"name": "PARTIAL",
					"value": "PARTIAL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"description": "Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "backupVaultName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created Before",
			"name": "createdBefore",
			"description": "Returns only backup jobs that were created before the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created After",
			"name": "createdAfter",
			"description": "Returns only backup jobs that were created after the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"description": "<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "accountId",
			"description": "<p>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID.</p> <p>If used from an Organizations management account, passing <code>*</code> returns all jobs across the organization.</p>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete After",
			"name": "completeAfter",
			"description": "Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete Before",
			"name": "completeBefore",
			"description": "Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Parent Job ID",
			"name": "parentJobId",
			"description": "This is a filter to list child (nested) jobs based on parent job ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parentJobId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/template/plans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /backup/plans/{backupPlanId}/versions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"required": true,
			"description": "Uniquely identifies a backup plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Plan Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Backup Vaults"
					]
				}
			}
		},
		{
			"displayName": "GET /copy-jobs/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"description": "Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "Returns only copy jobs that are in the specified state.",
			"default": "CREATED",
			"type": "options",
			"options": [
				{
					"name": "CREATED",
					"value": "CREATED"
				},
				{
					"name": "RUNNING",
					"value": "RUNNING"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				},
				{
					"name": "PARTIAL",
					"value": "PARTIAL"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created Before",
			"name": "createdBefore",
			"description": "Returns only copy jobs that were created before the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created After",
			"name": "createdAfter",
			"description": "Returns only copy jobs that were created after the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"description": "<p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Destination Vault Arn",
			"name": "destinationVaultArn",
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "destinationVaultArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "accountId",
			"description": "The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete Before",
			"name": "completeBefore",
			"description": "Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete After",
			"name": "completeAfter",
			"description": "Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Parent Job ID",
			"name": "parentJobId",
			"description": "This is a filter to list child (nested) jobs based on parent job ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parentJobId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Copy Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Protected Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /backup-vaults/{backupVaultName}/recovery-points/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Vault Name",
			"name": "backupVaultName",
			"required": true,
			"description": "<p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p> <note> <p>Backup vault name might not be available when a supported service creates the backup.</p> </note>",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"description": "Returns only recovery points that match the specified resource Amazon Resource Name (ARN).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "resourceType",
			"description": "Returns only recovery points that match the specified resource type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "resourceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Backup Plan ID",
			"name": "backupPlanId",
			"description": "Returns only recovery points that match the specified backup plan ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "backupPlanId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Created Before",
			"name": "createdBefore",
			"description": "Returns only recovery points that were created before the specified timestamp.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Created After",
			"name": "createdAfter",
			"description": "Returns only recovery points that were created after the specified timestamp.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Parent Recovery Point Arn",
			"name": "parentRecoveryPointArn",
			"description": "This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parentRecoveryPointArn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Backup Vault"
					]
				}
			}
		},
		{
			"displayName": "GET /legal-holds/{legalHoldId}/recovery-points",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Legal Hold ID",
			"name": "legalHoldId",
			"required": true,
			"description": "This is the ID of the legal hold.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "This is the next item following a partial list of returned resources. For example, if a request is made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "This is the maximum number of resource list items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Legal Hold"
					]
				}
			}
		},
		{
			"displayName": "GET /resources/{resourceArn}/recovery-points/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "<p>The maximum number of items to be returned.</p> <note> <p>Amazon RDS requires a value of at least 20.</p> </note>",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Recovery Points By Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /audit/report-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Name",
			"name": "ReportPlanName",
			"description": "Returns only report jobs with the specified report plan name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ReportPlanName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Creation Before",
			"name": "CreationBefore",
			"description": "Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "CreationBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Creation After",
			"name": "CreationAfter",
			"description": "Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "CreationAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"description": "<p>Returns only report jobs that are in the specified status. The statuses are:</p> <p> <code>CREATED | RUNNING | COMPLETED | FAILED</code> </p>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Report Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /restore-jobs/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "accountId",
			"description": "The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created Before",
			"name": "createdBefore",
			"description": "Returns only restore jobs that were created before the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Created After",
			"name": "createdAfter",
			"description": "Returns only restore jobs that were created after the specified date.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Returns only restore jobs associated with the specified job status.",
			"default": "PENDING",
			"type": "options",
			"options": [
				{
					"name": "PENDING",
					"value": "PENDING"
				},
				{
					"name": "RUNNING",
					"value": "RUNNING"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				},
				{
					"name": "ABORTED",
					"value": "ABORTED"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete Before",
			"name": "completeBefore",
			"description": "Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Complete After",
			"name": "completeAfter",
			"description": "Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completeAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Restore Jobs"
					]
				}
			}
		},
		{
			"displayName": "GET /tags/{resourceArn}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for <code>ListTags</code> are recovery points, backup plans, and backup vaults.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "nextToken",
			"description": "The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "maxResults",
			"description": "The maximum number of items to be returned.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "PUT /backup-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Vault Name",
			"name": "BackupVaultName",
			"type": "string",
			"default": "",
			"description": "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"routing": {
				"send": {
					"property": "BackupVaultName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Iam Role Arn",
			"name": "IamRoleArn",
			"type": "string",
			"default": "",
			"description": "Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.",
			"routing": {
				"send": {
					"property": "IamRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartBackupJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Start Window Minutes",
			"name": "StartWindowMinutes",
			"type": "number",
			"default": 0,
			"description": "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors.",
			"routing": {
				"send": {
					"property": "StartWindowMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Complete Window Minutes",
			"name": "CompleteWindowMinutes",
			"type": "number",
			"default": 0,
			"description": "A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for <code>StartWindowMinutes</code>, or if the backup started later than scheduled.",
			"routing": {
				"send": {
					"property": "CompleteWindowMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Lifecycle",
			"name": "Lifecycle",
			"type": "json",
			"default": "{\n  \"DeleteAfterDays\": {}\n}",
			"description": "<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the \"Lifecycle to cold storage\" section of the <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource\"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>",
			"routing": {
				"send": {
					"property": "Lifecycle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Recovery Point Tags",
			"name": "RecoveryPointTags",
			"type": "json",
			"default": "{}",
			"description": "To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "RecoveryPointTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Backup Options",
			"name": "BackupOptions",
			"type": "json",
			"default": "{}",
			"description": "<p>Specifies the backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs.</p> <p>Valid values: Set to <code>\"WindowsVSS\":\"enabled\"</code> to enable the <code>WindowsVSS</code> backup option and create a Windows VSS backup. Set to <code>\"WindowsVSS\"\"disabled\"</code> to create a regular backup. The <code>WindowsVSS</code> option is not enabled by default.</p>",
			"routing": {
				"send": {
					"property": "BackupOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Backup Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /copy-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recovery Point Arn",
			"name": "RecoveryPointArn",
			"type": "string",
			"default": "",
			"description": "An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. ",
			"routing": {
				"send": {
					"property": "RecoveryPointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Backup Vault Name",
			"name": "SourceBackupVaultName",
			"type": "string",
			"default": "",
			"description": "The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens.",
			"routing": {
				"send": {
					"property": "SourceBackupVaultName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Backup Vault Arn",
			"name": "DestinationBackupVaultArn",
			"type": "string",
			"default": "",
			"description": "An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.",
			"routing": {
				"send": {
					"property": "DestinationBackupVaultArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Iam Role Arn",
			"name": "IamRoleArn",
			"type": "string",
			"default": "",
			"description": "Specifies the IAM role ARN used to copy the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.",
			"routing": {
				"send": {
					"property": "IamRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartCopyJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"displayName": "Lifecycle",
			"name": "Lifecycle",
			"type": "json",
			"default": "{\n  \"DeleteAfterDays\": {}\n}",
			"description": "<p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the “retention” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold.</p> <p>Resource types that are able to be transitioned to cold storage are listed in the \"Lifecycle to cold storage\" section of the <a href=\"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource\"> Feature availability by resource</a> table. Backup ignores this expression for other resource types.</p>",
			"routing": {
				"send": {
					"property": "Lifecycle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Copy Job"
					]
				}
			}
		},
		{
			"displayName": "POST /audit/report-jobs/{reportPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Report Job"
					]
				}
			}
		},
		{
			"displayName": "Report Plan Name",
			"name": "reportPlanName",
			"required": true,
			"description": "The unique name of a report plan.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Report Job"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartReportJobInput</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Report Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Report Job"
					]
				}
			}
		},
		{
			"displayName": "PUT /restore-jobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recovery Point Arn",
			"name": "RecoveryPointArn",
			"type": "string",
			"default": "",
			"description": "An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.",
			"routing": {
				"send": {
					"property": "RecoveryPointArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Metadata",
			"name": "Metadata",
			"type": "json",
			"default": "{}",
			"description": "<p>A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.</p> <p> You can get configuration metadata about a resource at the time it was backed up by calling <code>GetRecoveryPointRestoreMetadata</code>. However, values in addition to those provided by <code>GetRecoveryPointRestoreMetadata</code> might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists.</p> <p>You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:</p> <ul> <li> <p> <code>file-system-id</code>: The ID of the Amazon EFS file system that is backed up by Backup. Returned in <code>GetRecoveryPointRestoreMetadata</code>.</p> </li> <li> <p> <code>Encrypted</code>: A Boolean value that, if true, specifies that the file system is encrypted. If <code>KmsKeyId</code> is specified, <code>Encrypted</code> must be set to <code>true</code>.</p> </li> <li> <p> <code>KmsKeyId</code>: Specifies the Amazon Web Services KMS key that is used to encrypt the restored file system. You can specify a key from another Amazon Web Services account provided that key it is properly shared with your account via Amazon Web Services KMS.</p> </li> <li> <p> <code>PerformanceMode</code>: Specifies the throughput mode of the file system.</p> </li> <li> <p> <code>CreationToken</code>: A user-supplied value that ensures the uniqueness (idempotency) of the request.</p> </li> <li> <p> <code>newFileSystem</code>: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.</p> </li> <li> <p> <code>ItemsToRestore</code>: An array of one to five strings where each string is a file path. Use <code>ItemsToRestore</code> to restore specific files or directories rather than the entire file system. This parameter is optional. For example, <code>\"itemsToRestore\":\"[\\\"/my.test\\\"]\"</code>.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "Metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Iam Role Arn",
			"name": "IamRoleArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: <code>arn:aws:iam::123456789012:role/S3Access</code>.",
			"routing": {
				"send": {
					"property": "IamRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Token",
			"name": "IdempotencyToken",
			"type": "string",
			"default": "",
			"description": "A customer-chosen string that you can use to distinguish between otherwise identical calls to <code>StartRestoreJob</code>. Retrying a successful request with the same idempotency token results in a success message with no action taken.",
			"routing": {
				"send": {
					"property": "IdempotencyToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Resource Type",
			"name": "ResourceType",
			"type": "string",
			"default": "",
			"description": "<p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>Aurora</code> for Amazon Aurora</p> </li> <li> <p> <code>DocumentDB</code> for Amazon DocumentDB (with MongoDB compatibility)</p> </li> <li> <p> <code>DynamoDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>EC2</code> for Amazon Elastic Compute Cloud</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> <li> <p> <code>FSx</code> for Amazon FSx</p> </li> <li> <p> <code>Neptune</code> for Amazon Neptune</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>Storage Gateway</code> for Storage Gateway</p> </li> <li> <p> <code>S3</code> for Amazon S3</p> </li> <li> <p> <code>VirtualMachine</code> for virtual machines</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Restore Job"
					]
				}
			}
		},
		{
			"displayName": "POST /tags/{resourceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "{}",
			"description": "Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: <code>[{\"Key\":\"string\",\"Value\":\"string\"}]</code>.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /untag/{resourceArn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Resource Arn",
			"name": "resourceArn",
			"required": true,
			"description": "An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Key List",
			"name": "TagKeyList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of keys to identify which key-value tags to remove from a resource.",
			"routing": {
				"send": {
					"property": "TagKeyList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
];
