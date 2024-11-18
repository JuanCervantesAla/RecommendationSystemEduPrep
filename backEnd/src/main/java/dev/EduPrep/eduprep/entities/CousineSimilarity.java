package dev.EduPrep.eduprep.entities;

public class CousineSimilarity {
    public static double cousine(Course courseA, Course courseB, double grade){
        double[] vectorA= {courseA.getTimedurationmonth(), courseA.getDifficult(), grade};
        double[] vectorB= {courseB.getTimedurationmonth(), courseB.getDifficult(), grade};

        double dot= 0.0;
        double mag1= 0.0;
        double mag2= 0.0;

        for(int i= 0; i < vectorA.length; i++){
            dot+= vectorA[i] * vectorB[i];
            mag1+= Math.pow(vectorA[i],2);
            mag2+= Math.pow(vectorB[i],2);
        }

        if (mag1 == 0 || mag2 == 0) {
            return 0.0;
        }

        return dot / ( Math.sqrt(mag1) * Math.sqrt(mag2));
    }
}
