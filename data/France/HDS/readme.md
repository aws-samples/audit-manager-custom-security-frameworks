# Hébergeur de données de santé (HDS) / Health data hosting (HDH)
:fr: Le répertoire présent propose une implémentation des exigences de sécurité issue du référentiel "Hébergeur de donées de santé (HDS)" compatible avec <a href="https://aws.amazon.com/audit-manager/">AWS Audit Manager</a> afin de faciliter la conduite des audits certifiant.

:gb: The current directory present an implementation of the security requirements that is compatible with <a href="https://aws.amazon.com/audit-manager/">AWS Audit Manager</a> in order to simplify the associated certifying audits.

## A propos d'HDS / About HDH

:fr: La certification HDS a pour vocation de renforcer la protection des données de Santé à caractère personnel et de construire un environnement de confiance autour de l'eSanté et du suivi des patients.
Elle s’appuie sur des référentiels incluant le respect de normes iso et permet de délivrer une certification par un organisme indépendant accrédité à toute structure ou organisme hébergeant des données de santé.
Les données personnelles de santé sont des données sensibles. Leur accès est encadré par la loi pour protéger les droits des personnes. L’hébergement de ces données doit en conséquence être réalisé dans des conditions de sécurité adaptées à leur criticité. La règlementation définit les modalités et les conditions attendues. (Source : <a href="https://esante.gouv.fr/produits-services/hds">ANS</a>)

:gb: HDH certification aims to strengthen the protection of personal health data and to build an environment of trust around eHealth and patient monitoring.
It is based on reference systems including compliance with iso standards and enables certification to be issued by an accredited independent organization to any structure or organization hosting health data.
Personal health data is sensitive data. Their access is regulated by law to protect the rights of individuals. The hosting of these data must therefore be carried out under security conditions adapted to their criticality. The regulations define the expected terms and conditions. (Source : <a href="https://ue.esante.gouv.fr/information-systems-security-pre-condition-trust/health-data-hosting-hds">ANS</a>)

## Modèle de responsabilité partagé / Shared responsability model

:fr: Conformément au <a href="https://aws.amazon.com/fr/compliance/shared-responsibility-model/?nc1=h_ls">modèle de responsabilité partagé</a> la sécurité et la conformité d'un système d'information dans le cloud est répartie entre AWS et le client. Aussi si <a href="https://esante.gouv.fr/offres-services/hds/liste-des-herbergeurs-certifies">AWS est certifié comme hébergeur de données de santé</a> l'atteinte des exigences de sécurité passe par l'utilisation des services et des zones géographiques entrant dans le <a href="https://aws.amazon.com/fr/compliance/hds/?nc1=h_ls">périmètre de la certification</a> ainsi que par le déploiement par les clients des contrôles (techniques, organisationnelles et contractuelles) de sécurité requit par le référentiel. Lors de la réalisation d'un audit les rapports de sécurité concernant AWS peuvent être téléchargé directement depuis <a href="https://aws.amazon.com/fr/artifact/">AWS Artifact</a>.

:gb: According to the <a href="https://aws.amazon.com/fr/compliance/shared-responsibility-model/?nc1=h_ls">shared responsibility model</a> security and compliance of a information system built in the cloud is split between AWS and the customer. Also if <a href="https://esante.gouv.fr/offres-services/hds/liste-des-herbergeurs-certifies">AWS is certified as a health data host</a> the attainment of the security requirements involves the use of services and geographical areas falling within the <a href="https://aws.amazon.com/fr/compliance/hds/?nc1=h_ls">certification scope</a > as well as our customer deploying the security controls (technical, organizational and contractual) required by the framework . When performing an audit, security reports regarding AWS can be downloaded directly from <a href="https://aws.amazon.com/en/artifact/">AWS Artifact</a>.

![Shared responsibility model](../../img/aws-shared-responsibility.png)

## Travailler avec AWS Audit Manager / Working with AWS Audit Manager

:fr: Une fois le cadre d'évaluation personnalisé déployé. La gestion du rapport et des audits se fait depuis la section <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/assessments.html">"Assessments"</a> d'AWS Audit Manager.

:gb: Once the custom framework is deployed the assessment can be done via the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/assessments.html">"Assessments"</a> section of AWS Audit Manager

## Se faire certifier / Becoming certified

:fr: Une fois les exigences satisfaites <a href="https://esante.gouv.fr/labels-certifications/hds/certification-des-hebergeurs-de-donnees-de-sante">l'audit de conformité</a> doit être conduit par un organisme accrédité et se conformer à la procédure en vigueur.

:gb: After the security requirements are met, <a href="https://esante.gouv.fr/labels-certifications/hds/certification-des-hebergeurs-de-donnees-de-sante">the certification process</a> must be conducted by an accredited organism and follow the official and documented procedure. 

## Liens de référence / Source links 

- About HDH : https://esante.gouv.fr/produits-services/hds
- Security requirements & Accreditation frameworks : https://esante.gouv.fr/services/hebergeurs-de-donnees-de-sante/les-referentiels-de-la-procedure-de-certification
- Legifrance, code de la santé publique, article L1111-8 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033862549
- Legifrance, décret n° 2018-137 du 26 février 2018 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000036650041
- Certifying bodies : https://esante.gouv.fr/offres-services/hds/liste-des-organismes-de-certification
- AWS HDH landing page : https://aws.amazon.com/compliance/hds/
- AWS Artifact : https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html
- AWS Audit Manager : https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html

## Captures d'écran / Screenshot

![Deployment via the CLI](../../img/hds/hds-cli-deployment.png)
![Console view 1](../../img/hds/hds-console-view-1.png)
![Console view 2](../../img/hds/hds-console-view-2.png)
![Deletion result](../../img/hds/hds-cli-supression.png)



