package Controllers;

import Scripts.RPN;
import Services.Json;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

// The Java class will be hosted at the URI path "/helloworld"
@Path("/calc")
public class CalcController {
    // The Java method will process HTTP GET requests
    @GET
    // The Java method will produce content identified by the MIME Media type "text/plain"
    @Produces("text/plain")
    public String getClichedMessage() {
        // Return some cliched textual content
        return "Hello World";
    }

    @GET
    @Path("/calculate")
    @Produces(MediaType.APPLICATION_JSON)
    public String calcResult(@QueryParam("calculateParams") String params) {
        Map<String, Object> result = new HashMap<>();
        Double res = -1.0;
        RPN rpn = new RPN();
        try {
            res = rpn.calcWithReversePolishNotation(params);
            result.put("RESULT", res);
        } catch (Throwable t) {
            System.out.println("Error");
            result.put("ERROR", "There is a mistake in your syntax");
        }
        return Json.toJson(result);
    }
}
