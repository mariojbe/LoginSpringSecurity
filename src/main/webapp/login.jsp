<%-- 
    Document   : index
    Created on : 19/10/2015, 15:14:16
    Author     : Mário Jorge
--%>
<%@page pageEncoding="ISO-8859-1" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<sec:authorize access="isRememberMe()">
    <c:redirect url="/pages/main.jsp"/>
</sec:authorize>

<sec:authorize access="isFullyAuthenticated()">
    <c:redirect url="/pages/main.jsp"/>
</sec:authorize>
<%--
<sec:authorize access="!isRememberMe()">
    <c:redirect url="/login.jsp"/>
</sec:authorize>

<sec:authorize access="!isFullyAuthenticated()">
    <c:redirect url="/login.jsp"/>
</sec:authorize>--%>
<html>
    <head>
        <title>Login</title>

        <!-- Ext JS files -->
        <!-- login form -->
        <script src="js/login.js" type="text/javascript"></script>

    </head>

    <body>
        <br><br><br><br><br>
    <center>
        <div id="login"></div>
    </center>
</body>
</html>
