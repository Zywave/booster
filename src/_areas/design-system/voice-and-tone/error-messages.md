---
layout: documentation
title: Error messages
subtitle:
---

There are a variety of standard error messages that a user might encounter within our products outside of validation errors. Each error should have a unique message that provides the user with a clear understanding of what caused the error and what their next steps might be. Depending on the scenario in which they encounter the error, this message could be presented using a few different delivery systems.

<spacer size="small" />

## 401 - Unauthorized

A user would encounter the 401 - unauthorized error when we don't recognize them. This typically indicates that the requested resource is restricted and requires authentication, but the client failed to provide any such authentication or we failed to authenticate them.

![401 error](images/communications/messages/401-error-message.svg)

### Implementation details

| Scenario                                                                                                                       | Solution                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The entire product isn't available unless a user is authenticated.                                                             | Make the product require authentication for anywhere a user is trying to access. If unauthenticated, every page request goes straight to login.                                                                                                                                                                                                                                                                                      |
| A product has some content on it that is publicly available, but there is some content that we don't want publicly accessible. | Make the product optionally authenticated. By being authenticated, a user has access to the content that we don't want available to the public. <br><br> If the user is logged in and bookmarks a specific page that isn't publicly available, then tries to access it while unauthenticated, the system would return a styled 401 page asking the user to log in. All of the unauthenticated pages and content are still available. |

---

## 403 - Forbidden

A user would encounter a 403 - forbidden error when they attempt to access a page or tool that their current profile does not have permission to view.

![403 error example](images/communications/messages/403-access-denied.svg)

| Scenario                                                                            | Solution                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An authenticated user navigates to a URL which they do not have permission to view. | Provide a full-page 403 error message letting the user know they can try to log in with a different profile that has access, or they can contact Zywave support or their administrator to obtain access. </br></br> If applicable, you can provide them with a link to a different page within the feature that they do have access to. |

---

## 404 - Not found

A user would encounter the 404 - not found error when attempting to access a source that has been deleted, moved, or the URL was incorrectly typed into the address bar. </br></br> There are two types of 404 - not found errors we have identified: page not found and resource not found.

<spacer size="small" />

### Page not found

A user would encounter the 404 - page not found error when attempting to access a page that does not exist within our products, meaning the URL is either not valid or the page has been moved/deleted.

Whenever possible, a redirect should be provided when a URL is changed so that users encounter this error less often.

![404 error example](images/communications/messages/404-page-not-found.svg)

#### Implementation details

| Scenario                                          | Solution                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A user navigates to a URL that previously existed | When possible, provide a redirect for the URL so that the user can be taken to the correct, updated URL. </br></br> If there is no location where a user can be redirected, then provide a full-page 404 error message with links to the next steps. These links should remain within the context of the tool they are attempting to navigate to whenever possible. |
| A user navigates to an incorrect URL              | Provide a full-page 404 error message with links, next steps, to contact Zywave support, or their administrator. These links should remain within the context of the tool they are attempting to navigate to whenever possible.                                                                                                                                     |

<spacer size="large" />

### Resource not found

A user would encounter the 404 - resource not found error when attempting to access a resource that does not exist within our products. Typically, this indicates that the user tried to navigate to an invalid resource ID or that the resource was deleted.

This message can be presented as either a banner well or a full-page error that has the Zywave Shell available to the user.

<br>

#### Implementation details

##### Banner well

The banner well error text and links are customizable by the consumer. The text should be clear and concise, providing our users with an understanding of what caused the error and what their next steps are. The link can be customized to provide the user with a path to resolve the error, such as contacting Zywave support. However, because the user remains on the current page and are able to navigate freely, the link is optional and should be used sparingly.

| Scenario                                    | Solution                                                                                                                                                                                                                                                                   |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A user selects a resource that was deleted. | The user encounters a 404 error banner well stating that the resource cannot be found. The user can either dismiss the error or select an available option such as a link to the Zywave Support site, contact a Zywave support specialist, or contact their administrator. |

<spacer size="small" />

![404 Banner](images/communications/messages/404_resourcenotfound_bannerwell.svg)
<br><br>

##### Full-page

Our standard 404 error image should appear at the top center of the page.

The full-page error text and links are customizable. The text should be clear and concise, providing our users with an understanding of what caused the error and what their next steps are. The links should be customized to provide the user with at least one path to continue working within our products. The path that they are sent to should make sense based on where they encountered the error within Zywave when possible.

While we hope that the messaging and links provided will be enough to assist the user, a link to the Zywave Support site should always be included.

Along with this information, if the resource has an ID number associated with it, this should be displayed to allow the administrator or Zywave support specialist to better assist the user.

| Scenario                                                          | Solution                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A user enters or attempts to navigate to an invalid resource key. | The user encounters a 404 page stating that the resource cannot be found. The user can select an available option such as selecting a link to a similar resource or page in the product, contacting Zywave support, or contacting their administrator. |

<spacer size="small" />

![404 Full-page](images/communications/messages/404_resourcenotfound_pageillustration.svg)

---

## 500 - Internal server error

A user would encounter the 500 - internal server error when something has gone wrong with our products' servers. The 500 error is a "server-side" error which means there is a problem with the products' server but the server could not be more specific on the exact problem. In most cases, the user will just have to wait until we fix the issue but there are a few things a user can do as the issue can only be temporary:

- Clear the cache and delete any cookies from the page with the error

- Clear browser history

- Retry the page by clicking refresh or reload

- Retype the URL in the address bar and press enter

- Come back to the page later when the issue has been resolved

Being that a 500 error is "server-side", the problem is most likely your problem. Some of the common reasons you may be serving a 500 error to your users are:

- Permission error

- Request timeout

- A coding error

<spacer size="small" />

### Implementation details

This message is presented as a full-page error that has the Zywave Shell available to the user.

Our standard 500 error image should appear at the top center of the page.

The text should be clear and concise, providing our users with an understanding of what caused the error and what their next steps are. The links should be customized to provide the user with at least one path to continue working within our products. The path that they are sent to should make sense based on where they encountered the error within Zywave when possible.

While we hope that the messaging and links provided will be enough to assist the user, a link to the Zywave Support site should always be included alongside the phone number to contact support.

| Scenario                                                      | Solution                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web server is down or busy, causing all features to fail.     | The user must wait until the problem is resolved on the server-side. In the meantime, the user can try a few different things until the problem is fixed: <br><br>- Refresh the page <br><br>- Log out and log back in <br><br>- Clear cookies and cache |
| Web server is down or busy, causing a single feature to fail. | The user must wait until the problem is resolved on the server-side. In the meantime, the user can try a few different things until the problem is fixed: <br><br>- Refresh the page <br><br>- Log out and log back in <br><br>- Clear cookies and cache |

<spacer size="small" />

### Standard text

Title: The server encountered an internal error

Body: Try coming back later or refreshing the page. If you're still having issues, contact Zywave support.

<spacer size="small" />

### All features error

![500 All features](images/communications/messages/500_internalservererror_fullpage.svg)

<spacer size="small" />

### Single feature error

![500 Single feature](images/communications/messages/500_internalservererror_singleactionerror.svg)
