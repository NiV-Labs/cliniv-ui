import { MedicationUsed } from "./Medicine";
import { Evolution } from "./Evolution";
import { Document } from "./Document";
import { Accommodation } from "./Accommodation";
import { EventType } from "./EventType";
import { ProcedureInfo } from "./Procedure";
import { Professional } from "./Professional";

/**
 * Informações do atendimento
 */
export class AttendanceInfo {
    id: number;
    type: string;
    fullName: string = "";
    socialName: string = "";
    patientId: number;
    susNumber: number;
    sectorId: number;
}

/**
 * Filtros de atendimento
 */
export class AttendanceFilters {
    sectorId: string;
    fullName: string;
    socialName: string;
    cpf: string;
    patientType: string;
    entryType: string;
}

/**
 * Representa informações detalhadas do atendimento
 */
export class MedicalRecord {
    id: number;
    entryDateTime: Date;
    exitDateTime: Date;
    patientId: number;
    document: Document;
    susNumber: string;
    fullName: string;
    socialName: string;
    principalNumber: string;
    lastAccommodation: Accommodation;
    bornDate: Date;
    gender: string;
    allergies: Array<string>;
    events: Array<AttendanceEvent>;
    evolutions: Array<Evolution>;
    medicines: Array<MedicationUsed>;
    attendanceLevel: string;
}

/**
 * Representa o evento do Atendimento
 */
export class AttendanceEvent {
    id: number;
    datetime: Date;
    description: string;
    documentId: number;
}

/**
 * Representa o objeto de criação de Atendimento
 */
export class NewAttendance {
    patientId: number;
    accommodationId: number;
    eventTypeId: number;
    responsibleId: number;
    specialityId: number;
    entryCause: string;
    level: string;
}

/**
 * Classe que representa o histórico de atendimentos do Paciente
 */
export class PatientHistory {
    id: number;
    entryDatetime: Date;
    entryCause: string;
    isFinished: boolean;
}

/**
 * Classe que representa Objeto de requisição de alta médicaz
 */
export class CloseAttendanceRequest {
    eventTypeId: number = 19;
    observations: string;
}

/**
 * Classe que representa Objeto de requisição para criação de novo evento clínico
 */
export class NewAttendanceEvent {
    attendanceId: number;
    accommodation: Accommodation = new Accommodation();
    documents: Array<Document> = [];
    eventType: EventType;
    observations: string;
    procedure: ProcedureInfo;
    responsible: Professional = new Professional();
}