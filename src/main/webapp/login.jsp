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

<html>
    <head>
        <title>Login</title>

        <!-- Ext JS files -->
        <style type="text/css">
            @import url("ext-3.2.1/resources/css/ext-all.css");
        </style>
        <script src='<c:url value="ext-3.2.1/adapter/ext/ext-base.js"/>'></script>
        <script src='<c:url value="ext-3.2.1/ext-all.js"/>'></script>
        <script src='<c:url value="ext-3.2.1/locale/ext-lang-pt_BR.js"/>'></script>
        <!-- login form -->
        <script src='<c:url value="js/Login.js"/>'></script>
        
        
    </head>

    <body>
        <br><br><br><br><br>
    <center>
        <div id="login"></div>
    </center>
</body>
</html>
