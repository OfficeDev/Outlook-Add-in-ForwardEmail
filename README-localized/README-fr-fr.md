---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/18/2015 3:24:21 PM
---
# Outlook-Add-in-ForwardEmail
Cet exemple d’application indique comment utiliser JavaScript et les services web Exchange dans une application de messagerie pour Outlook pour transférer les éléments de courrier actuels à une liste d’adresses électroniques définies par l’utilisateur et inclue éventuellement les commentaires définis par l’utilisateur avec le message électronique transféré.

**Description de l’exemple**
la figure 1 illustre l’exemple d’application courrier disponible dans la barre d’application du courrier électronique de l’utilisateur dans Outlook Web Access.

![Figure 1. Exemple d’application courrier dans la barre d’application.](/description/c3d5f40e-654f-493c-892d-73cc8f18b458image.jpg)


Lorsque l’utilisateur choisit l’application courrier dans la barre d’application, l’interface utilisateur complète de l’application se développe dans l’affichage. L’utilisateur peut ensuite taper les adresses de courrier séparées par des points-virgules dans l’espace fourni, et éventuellement les commentaires qu’ils souhaitent envoyer avec le message transféré.

Enfin, lorsque l’utilisateur choisit l’option Go ! dans l’interface utilisateur de l’application, le code JavaScript transfère le courrier électronique à chacune des adresses entrées par l’utilisateur, et inclut tous les commentaires de la zone de texte Commentaires avec les messages transférés. L’interface utilisateur de l’application affiche ensuite un message indiquant la réussite ou l’échec de l’opération.

**Conditions préalables**


Cet exemple nécessite les éléments suivants :

* Visual Studio 2012 (RTM).
* Outils Office 2013 pour Visual Studio 2012 (RTM).
* Accès à un site de développeur Office 365 (recommandé) ou installation locale d’Exchange Server 2013. Vous pouvez [participer au programme pour les développeurs Office 365 et obtenir un abonnement gratuit d’un an à Office 365](https://aka.ms/devprogramsignup).

**Composants clés de l’exemple**

L’exemple d’application contient les éléments suivants :

* Le projet OutlookEmailForwarder, qui contient les éléments suivants :
* Le fichier manifeste OutlookEmailForwarder.xml.
* Le projet OutlookEmailForwarderWeb, qui contient plusieurs fichiers de modèles. Toutefois, les fichiers développés dans le cadre de cet exemple de solution incluent les éléments suivants :
* OutlookEmailForwarder.html (dans le dossier Pages). Ceci contient l’interface utilisateur HTML qui s’affiche dans le volet de tâches. Il s’agit d’un simple code HTML, de deux contrôles d’entrée de texte et d’un contrôle d’entrée de bouton.
* OutlookEmailForwarder.js (dans le dossier Scripts). Ce fichier de script contient du code qui s’exécute lors du chargement de l’application.

Tous les autres fichiers sont automatiquement fournis par le modèle de projet Visual Studio pour les applications pour Office, et ceux-ci n’ont pas été modifiés au cours du développement de cet exemple d’application.

**Configurer l’exemple**

Pour tester l’exemple, inscrivez-vous à un site Office 365 pour les développeurs, puis envoyez au moins un courrier électronique à un compte de messagerie que vous avez configuré à cet emplacement avant d’exécuter cet exemple. Vous pouvez également configurer une installation locale d’Exchange Server 2013 et vérifier qu’au moins une boîte aux lettres a été configurée pour vous, puis envoyer au moins un courrier électronique à ce compte avant d’exécuter cet exemple. Aucune autre configuration n’est nécessaire.

**Créer l’exemple**

Pour créer la solution, sélectionnez les touches Ctrl + Maj + B.

**Exécuter et tester le complément**

1. Sélectionnez la touche F5 pour exécuter l’application. La boîte de dialogue suivante s’affiche.
![Figure 4. Boîte de dialogue Connexion à un compte de courrier Exchange](/description/image.jpg)


2. Entrez les informations d’identification de votre site Office 365 pour les développeurs, puis sélectionnez le bouton Connexion pour permettre à l’application de détecter automatiquement l’URL des services Web Exchange et l’URL d’Outlook Web Access dont elle aura besoin pour déployer et exécuter l’exemple.
3. Vous serez peut-être invité à vous connecter à Outlook Web Access pour votre site Office 365 Developer. Si c’est le cas, entrez les mêmes informations d’identification que celles utilisées à l’étape 2.
4. Vous pouvez ensuite suivre les étapes décrites au début de ce document pour voir l’application en action.

**Résolution des problèmes**

Si vous essayez d’utiliser une installation locale d’Exchange Server, demandez à un administrateur Exchange de vérifier que le serveur Exchange Server 2013 est correctement configuré. Nous vous conseillons de vous inscrire à un site pour les développeurs Office 365 pour pouvoir tester cet exemple dans le cadre d’une installation locale d’Exchange Server 2013, car il est difficile et fastidieux de tout configurer.

**Journal des modifications**

* Première mise en circulation : 15 avril 2013.
* Publication GitHub : 19 août 2015

**Contenu associé**

* [Autres exemples de compléments](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
* [Développer des applications pour Office](http://msdn.microsoft.com/library/office/jj220060.aspx)
* [Applications de messagerie pour Outlook](http://msdn.microsoft.com/library/office/fp161135.aspx)
* [Inscription auprès d’un site du développeur Office 365](http://msdn.microsoft.com/library/fp179924.aspx)


Ce projet a adopté le [Code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
