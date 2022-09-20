const mongoose = require("mongoose");

const CriticalIncidentFormSchema = new mongoose.Schema(
  {
    ReportStatus: {
      type: String,
      default: "Pending",
    },
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    NotificationDate: {
      type: Date,
    },
    CCUContractNumber: {
      type: String,
    },
    ParticipantName: {
      type: String,
    },
    PArticipantDOB: {
      type: Date,
    },
    ParticipantID: {
      type: String,
    },
    ParticipantPhone: {
      type: String,
    },
    ParticipantAddress: {
      type: String,
    },
    IncidentDate: {
      type: Date,
    },
    IncidentTime: {
      type: String,
    },
    IncidentLocation: {
      type: String,
    },
    IncidentDescription: {
      type: String,
    },
    IncidentType: {
      type: String,
    },
    IncidentSharedWithEmergencyResponse: {
      type: Boolean,
    },
    ReportingType: {
      type: String,
    },
    ReporterAgency: {
      type: String,
    },
    ReporterName: {
      type: String,
    },
    ReporterPhone: {
      type: String,
    },
    ReporterAddress: {
      type: String,
    },
    ReporterEmail: {
      type: String,
    },
    InvestigationApproach: {
      type: String,
    },
    InvestigationFindings: {
      type: String,
    },
    PostIncidentAction: {
      type: String,
    },
    IncidentStatus: {
      type: String,
    },
    ReviewedBy: {
      type: String,
    },
    ReviewedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CriticalIncidentForm = mongoose.model(
  "CriticalIncidentForm",
  CriticalIncidentFormSchema
);
