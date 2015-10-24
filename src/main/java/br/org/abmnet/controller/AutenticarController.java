package br.org.abmnet.controller;

/**
 *
 * @author Mário Jorge
 */
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class AutenticarController extends MultiActionController{
	public ModelAndView main(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return new ModelAndView("index.jsp");
	}
}
